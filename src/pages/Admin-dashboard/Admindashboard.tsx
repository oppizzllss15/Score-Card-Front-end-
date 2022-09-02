import { useState, useEffect } from "react";
import { getAllStack, createNewStack } from "../../utils/api";
import EmptyStack from "../error-dashboard/Error";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";
import { CgClose } from "react-icons/cg";
import "./Admindashboard.css";
const defaultForm = {
  name: "",
  image: "",
};
export function AdminDashboard() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState(defaultForm);
  const [isActive, setIsActive] = useState(false);
  const { name, image } = input;
  const role = localStorage.getItem("role");

  const getFormModal = () => {
    if (isActive) setIsActive(false);
    else setIsActive(true);
  };

  const handleChange = (e: any) => {
    const { files } = e.target;
    if (files) {
      const url = `https://api.cloudinary.com/v1_1/omecloudinary/upload`;
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "upload");
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((datas) => {
          setInput({ ...input, image: datas.secure_url });
        });
    } else {
      const { value, name } = e.target;
      setInput({ ...input, [name]: value });
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await createNewStack(name, image);
    getData();
    setInput(defaultForm);
    getFormModal();
  };

  const getData = async () => {
    const response = await getAllStack();
    setData(response.message.allStacks);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <DashboardLayout>
      {data.length > 0 ? (
        <div className="dashboard-body">
          <div className="dash-head">
            <h1 className="dashboard">Dashboard</h1>
            {role === "superadmin" && (
            <button onClick={getFormModal} className="create-stack">
              + Create Stack
            </button>
            )}
          </div>
          <div className="admin-dashboard">
            {data.map((stack: { image: string; name: string }) => (
              <div key={stack.name} className="each-stack">
                <div className="img-stack">
                  <img src={stack.image} alt={stack.name} />
                </div>
                <p>{stack.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <EmptyStack getFormModal={getFormModal} />
      )}
      {isActive && (
        <div className="stack-form">
          <div className="stack-header">
            <div>Create a Stack</div>
            <div>
              <button onClick={getFormModal}>
                <CgClose />
              </button>
            </div>
          </div>
          <div className="stack-horizon">
            <hr />
          </div>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <label className="stack-label">Stack Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter name of stack"
              className="stack-input"
              value={name}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label className="stack-label">Upload image</label>
            <br />
            <input
              type="file"
              name="image"
              placeholder="Enter image url of stack"
              className="stack-input"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit" className="stack-button">
              Done
            </button>
          </form>
        </div>
      )}
      {/* {data.length === 0 && <EmptyStack getFormModal={getFormModal} />} */}
    </DashboardLayout>
  );
}

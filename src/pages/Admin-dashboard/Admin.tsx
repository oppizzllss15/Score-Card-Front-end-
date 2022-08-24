import { useState, useEffect } from "react";
import { getAllStack } from "../../utils/api";
import ts from "../../images/vector.png";
import EmptyStack from "../error-dashboard/Error";
import "./Admin.css";
import { CgClose } from "react-icons/cg";

const defaultForm = {
  name: "",
  image: "",
};

export function Admin() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState(defaultForm);
  const [isActive, setIsActive] = useState(false);
  const { name, image } = input;

  const getFormModal = () => {
    if (isActive) setIsActive(false);
    else setIsActive(true);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(input);
    setInput(defaultForm);
  };

  const getData = async () => {
    const response = await getAllStack();
    setData(response.message.allStacks);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      {data.length > 0 ? (
        <>
          <div style={{ display: "flex" }}>
            <h1 className="dashboard">Dashboard</h1>
            <button onClick={getFormModal} className="create-stack">
              + Create Stack
            </button>
          </div>
          <div className="admin-dashboard">
            {data.map((stack: { image: string; name: string }) => (
              <div key={stack.name} className="each-stack">
                <div className="img-stack">
                  <img
                    src="https://www.devteam.space/wp-content/uploads/2022/05/nodejs.jpg"
                    alt=""
                  />
                </div>
                <p>{stack.name}</p>
              </div>
            ))}
          </div>
        </>
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
            <label className="stack-label">Image Url</label>
            <br />
            <input
              type="text"
              name="image"
              placeholder="Enter image url of stack"
              className="stack-input"
              value={image}
              onChange={(e) => handleChange(e)}
            />
            <button type="submit" className="stack-button">
              Done
            </button>
          </form>
        </div>
      )}

      {/* {data.length === 0 && <EmptyStack getFormModal={getFormModal} />} */}

      {/* <div className="each-stack">
        <div className="img-stack">
          <img src={ts} alt="" />
        </div>
        <p>Typescript</p>
      </div>
      <div className="each-stack">
        <div className="img-stack">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/java-23-225999.png"
            alt=""
          />
        </div>
        <p>Java</p>
      </div>
      <div className="each-stack">
        <div className="img-stack">
          <img
            src="https://www.natmarchand.fr/wp-content/uploads/2018/05/asp.net_.jpg"
            alt=""
          />
        </div>
        <p>ASP.Net</p>
      </div>
      <div className="each-stack">
        <div className="img-stack">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgt1OLQvMNsIzVHqXllnfrmJHxXjSxjaBUZfK0SAl6kyUl4f4QrLCjilaaJ6cflVtffpM&usqp=CAU"
            alt=""
          />
        </div>
        <p>React</p>
      </div>
      <div className="each-stack">
        <div className="img-stack">
          <img
            src="https://ih1.redbubble.net/image.382749689.2902/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u2.jpg"
            alt=""
          />
        </div>
        <p>Javascript</p>
      </div>
      <div className="each-stack">
        <div className="img-stack">
          <img
            src="https://media.istockphoto.com/vectors/vector-illustration-of-an-icon-of-the-python-programming-language-vector-id1152382561?k=20&m=1152382561&s=170667a&w=0&h=fCTE3e8VRQ2TDd_roKCf7zZmvrY2E6ZhonBHrGz0rsA="
            alt=""
          />
        </div>
        <p>Python</p>
      </div>
      <div className="each-stack">
        <div className="img-stack">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <p>Angular</p>
      </div>
      <div className="each-stack">
        <div className="img-stack">
          <img src="https://cdn.cdnlogo.com/logos/m/88/mysql.svg" alt="" />
        </div>
        <p>MySQL</p>
      </div> */}
    </>
  );
}

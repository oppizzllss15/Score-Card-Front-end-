import { useState, useEffect } from "react";
import { getAllStack } from "../../utils/api";
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
   useEffect(() => {
      getData();
   }, []);
   return (
      <DashboardLayout>
         {data.length > 0 ? (
            <div>
               <div  className="dash-head">
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
      </DashboardLayout>
   );
}

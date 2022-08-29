import "./CreateAdmin.css"
import React, { useState } from 'react';
import { SimpleInput } from "../../components/SimpleInput";
import { SignupButton } from "../../components/SignupButton";
import { Selectoption } from "../../components/Selectoption";
import { createAdmin } from "../../utils/api";

const CreateAdmin = () => {
   let initialFormData = {
      firstName : "",
      lastName: "",
      email: "",
      stack:"",
      squad: "",
      role: "",

   };
 const [formData, setFormData] = useState(initialFormData);
 function handleInputChange(event:any){
   let name = event.target.name;
   let value = event.target.value;
   setFormData((currentFormData) =>{
      return{ ...currentFormData, [name] :value}
   }); 

}

const {
   firstName,
   lastName,
   email,
   stack,
   squad,
   role
} = formData;
async function handleAdminSubmit(event:any){
   event.preventDefault();
   try{
      const res = await createAdmin(firstName, lastName, email, stack,squad, role);
      alert(JSON.stringify(res));

   }catch(e){
      alert(e.message)
   }

   }


  return (
    <div>
         <div className="headuser">
            <div className="headerCon">
               <p>Create Admin</p>
               <button type ="submit">View all Admins</button>
            </div>
        
         </div>
         <div className="box-user">
            <div className="form-boxx">
               <p className="userp">Fill in your required data</p>
               <hr />
               <div className="formuser">
                  <form action="" onSubmit={handleAdminSubmit} >

                     <SimpleInput
                        placeholder="Enter first name"
                        name="firstName"
                        label="First Name"
                        type="text"
                        onChange = {handleInputChange}
                     />
                     <SimpleInput
                        placeholder="Enter last name"
                        name="lastName"
                        label="Last Name"
                        type="text"
            
                        onChange = {handleInputChange}
                     />
                     <SimpleInput
                        placeholder="Enter your email"
                        name="email"
                        label="Email"
                        type="email"
                       
                        onChange = {handleInputChange}
                     />
                     <div>
                        <label className="control-text">Stacks</label>
                        <Selectoption
                           label="stack" 
                             
                           
                        />
                     </div>
                     <SimpleInput
                        placeholder="Select"
                        name="Assign Role"
                        label="Assign Role"
                        type="text"
                       
                        onChange = {handleInputChange}
                     />
                     <SimpleInput
                        placeholder="Squad"
                        name="squad"
                        label="Squad"
                        type="text"
                        onChange = {handleInputChange}
                     />
                     <SignupButton name="Create Admin" />
                  </form>
               </div>
            </div>
         </div>
      </div>
  );
}
export default CreateAdmin;

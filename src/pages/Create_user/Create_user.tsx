
import React, { ChangeEvent, useState } from "react";
import { Selectoption } from "../../components/Selectoption";
import { SignupButton } from "../../components/SignupButton";
import { SimpleInput } from "../../components/SimpleInput";
import { createUser } from "../../utils/api";
import "./createuser.css";



export const CreateUser = () => {
   interface FormDataType {
      firstname: string;
      lastname: string;
      email: string;
      squad: string;
      stack: string;
   }
   const [formData, setFormData] = useState<FormDataType>({
      firstname: "",
      lastname: "",
      email: "",
      squad: "",
      stack: "",
   })

   const [loading, setLoading] = useState(false)

   const { firstname, lastname, email, squad, stack } = formData;

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const getValue : any = { ...formData };
      getValue[e.target.name] = e.target.value;
      setFormData(getValue);
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      try {
         await createUser(
            firstname,
            lastname,
            email,
            stack,
            squad
         );
      
         setLoading(false);
      } catch (error) {
         setLoading(false);
      } finally { 
         setLoading(false);
      }

      
      console.log(formData);
      
    }

   return (
      <div>
         <div className="headuser">
            <div className="headerCon">
               <p>Create User</p>
               <button>View all user</button>
            </div>
         </div>
         <div className="box-user">
            <div className="form-boxx">
               <p className="userp">Fill in your required data</p>
               <hr />
               <div className="formuser">
                  <form action="">
                     <SimpleInput
                        placeholder="Enter first name"
                        name="firstname"
                        label="First Name"
                        type="text"
                        value={firstname}
                        onChange={handleChange}
                     />
                     <SimpleInput
                        placeholder="Enter last name"
                        name="lastname"
                        label="Last Name"
                        type="text"
                        value={lastname}
                        onChange={handleChange}
                     />
                     <SimpleInput
                        placeholder="Enter your email"
                        name="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                     />
                     <div>
                        <label className="control-text">Stacks</label>
                        <Selectoption
                           label="stack"
                          
                        />
                     </div>
                     <SimpleInput
                        placeholder="Squad"
                        name="squad"
                        label="Squad"
                        type="text"
                        value={squad}
                        onChange={handleChange}
                     />
                     <SignupButton
                        name={loading ? "Loading" : "Create User"}
                        handleSubmit={handleSubmit}
                     />
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

import React from "react";
import { SignupButton } from "../../components/SignupButton";
import { SimpleInput } from "../../components/SimpleInput";
import "./createuser.css";

export const CreateUser = () => {
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
                        name="name"
                        label="First Name"
                        type="text"
                     />
                     <SimpleInput
                        placeholder="Enter last name"
                        name="name"
                        label="Last Name"
                        type="text"
                        value=""
                     />
                     <SimpleInput
                        placeholder="Enter your email"
                        name="email"
                        label="Email"
                        type="email"
                        value=""
                     />

                     
                     <SimpleInput
                        placeholder="Squad"
                        name="squad"
                        label="Squad"
                        type="text"
                        value=""
                     />
                     <SignupButton name="Create User" />
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

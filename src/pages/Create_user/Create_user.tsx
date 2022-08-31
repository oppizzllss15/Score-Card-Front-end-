import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Selectoption } from "../../components/Selectoption";
import { SignupButton } from "../../components/SignupButton";
import { SimpleInput } from "../../components/SimpleInput";
import { createUser } from "../../utils/api";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";
import Swal from "sweetalert2";
import "./createuser.css";

export const CreateUser = () => {
  
  interface FormDataType {
    firstname: string;
    lastname: string;
    email: string;
    squad: number;
    stack: string;
  }
  const [formData, setFormData] = useState<FormDataType>({
    firstname: "",
    lastname: "",
    email: "",
    squad: 0,
    stack: "",
  });

  const [loading, setLoading] = useState(false);

  const { firstname, lastname, email, squad, stack } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const getValue: any = { ...formData };
    getValue[e.target.name] = e.target.value;
    setFormData(getValue);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    try {
      const res = await createUser(firstname, lastname, email, squad, stack);
      console.log(res)
      if (res.firstname === firstname && res.email === email.toLowerCase()) {
         setTimeout(() => {
           Swal.fire({
             icon: "success",
             title: "Successful",
             text: `${email} successfully registered`,
             confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
             confirmButtonAriaLabel: "Thumbs up, great!",
             confirmButtonColor: "#93d413",
           });
         }, 1000);
         setFormData({
            firstname: "",
            lastname: "",
            email: "",
            squad: 0,
            stack: "",
          });
       } else {
         setTimeout(() => {
           Swal.fire({
             icon: "info",
             title: "Error",
             text: `Something went wrong`,
             showDenyButton: true,
             denyButtonText: "Try again",
             confirmButtonColor: "#93d413",
           });
         }, 1000);
       }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="page-header">
        <div className="headuser">
          <div className="headerCon">
            <p>Create User</p>
            <Link to="/devmanagement">
              <button>View all user</button>
            </Link>
          </div>
        </div>
        <div className="box-user">
          <div className="form-createuser">
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
                    name="stack"
                    value={stack}
                    handleChange={handleChange}
                  />
                </div>
                <SimpleInput
                  placeholder="Squad"
                  name="squad"
                  label="Squad"
                  type="number"
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
    </DashboardLayout>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import { SimpleInput } from "../../components/SimpleInput";
import { SignupButton } from "../../components/SignupButton";
import { Selectoption } from "../../components/Selectoption";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";
import { createNewAdmin } from "../../utils/api";
import Swal from "sweetalert2";
import "./CreateAdmin.css";

const defaultFormField = {
  firstname: "",
  lastname: "",
  email: "",
  stack: "",
  squad: 0,
  role: "",
};

const CreateAdmin = () => {
  const [formData, setFormData] = useState(defaultFormField);
  const { firstname, lastname, email, stack, squad, role } = formData;

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((currentFormData) => {
      return { ...currentFormData, [name]: value };
    });
  };

  const handleAdminSubmit = async (event: any) => {
    event.preventDefault();
    const res = await createNewAdmin(
      firstname,
      lastname,
      email,
      squad,
      stack,
      role
    );
    if (res.message && res.message.match(/successfully/gi)) {
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: `${res.message}`,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: "Thumbs up, great!",
          confirmButtonColor: "#93d413",
        });
      }, 1000);
      setFormData(defaultFormField)
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
  };

  return (
    <DashboardLayout>
      <div className="admin-container">
        <div className="headuser">
          <div className="headerCon">
            <p>Create Admin</p>
            <Link to="/adminmanagement"><button className="bbb">View all Admins</button></Link>
          </div>
        </div>
        <div className="box-user">
          <div className="form-createadmin">
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
                  onChange={handleInputChange}
                />
                <SimpleInput
                  placeholder="Enter last name"
                  name="lastname"
                  label="Last Name"
                  type="text"
                  value={lastname}
                  onChange={handleInputChange}
                />
                <SimpleInput
                  placeholder="Enter your email"
                  name="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                />
                <div>
                  <label className="control-text">Stacks</label>
                  <Selectoption
                    label="stack"
                    name="stack"
                    value={stack}
                    handleChange={handleInputChange}
                  />
                </div>
                <SimpleInput
                  placeholder="Role"
                  name="role"
                  label="Assign Role"
                  type="text"
                  value={role}
                  onChange={handleInputChange}
                />
                <SimpleInput
                  placeholder="Squad"
                  name="squad"
                  label="Squad"
                  type="number"
                  value={squad}
                  onChange={handleInputChange}
                />
                <SignupButton
                  name="Create Admin"
                  handleSubmit={handleAdminSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateAdmin;

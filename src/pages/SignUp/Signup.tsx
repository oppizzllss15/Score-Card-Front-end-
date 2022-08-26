// import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Logo } from "../../components/Logo";
import { SignupButton } from "../../components/SignupButton";
import { SimpleInput } from "../../components/SimpleInput";
import { signUp } from "../../utils/api";
import "./SignUp.css";

const defaultFormField = {
  firstname: "",
  lastname: "",
  email: "",
  stack: "",
  squad: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export const Signup = () => {
  const [formData, setFormData] = useState(defaultFormField);
  const { firstname, lastname, email, password, confirmPassword, phone, stack, squad } = formData

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return Swal.fire("", "Passwords do not match");
    }
    try {
      const res = await signUp(
        formData.firstname,
        formData.lastname,
        formData.email,
        formData.stack,
        formData.squad,
        formData.phone,
        formData.password,
        formData.confirmPassword
      );
      const result = await res;
      console.log(result);
      if (!result.error) {
        Swal.fire({
          position: "center",
          title: "Successful",
          icon: "success",
          iconColor: "#93d413",
          showConfirmButton: true,
          confirmButtonColor: "#93d413",
          html: "Signup successful. Check your email for login details.",
          footer: `<a href="/login">Go to login</a>`,
        });
      } else {
        Swal.fire({
          position: "top",
          title: "Error",
          icon: "error",
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: "Try Again",
          denyButtonColor: "#93d413",
          html: result.error,
          footer: `<a href="/login">Go to login</a>`,
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "top",
        title: "Error",
        icon: "error",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: "Something went wrong",
        denyButtonColor: "#93d413",
        html: "Signup failed",
        footer: `<a href="/login">Go to login</a>`,
      });
    }
  };

  return (
     <div className="signup-body">
        <div className="change">
           <div className="first">
              <div className="logo">
                 <Logo />
              </div>

              <Link to="/login" style={{ textDecoration: "none" }}>
                 <p className="go_back" >Go back to login</p>
              </Link>
              <p className="reset">Sign Up</p>

              <form className="form" onSubmit={(e) => onSubmit(e)}>
                 <SimpleInput
                    name="firstname"
                    label="First Name"
                    type="text"
                    value={firstname}
                    placeholder="First Name"
                    onChange={(e) => handleChange(e)}
                 />
                 <SimpleInput
                    name="lastname"
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => handleChange(e)}
                 />
                 <SimpleInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => handleChange(e)}
                 />
                 <SimpleInput
                    name="stack"
                    label="Stack"
                    type="text"
                    placeholder="Enter your stack"
                    value={stack}
                    onChange={(e) => handleChange(e)}
                 />
                 <SimpleInput
                    name="squad"
                    label="Squad"
                    type="text"
                    placeholder="Enter your Squad"
                    value={squad}
                    onChange={(e) => handleChange(e)}
                 />
                 <SimpleInput
                    name="phone"
                    label="Phone Number"
                    type="text"
                    placeholder="Enter your Phone Number"
                    value={phone}
                    onChange={(e) => handleChange(e)}
                 />

                 <SimpleInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => handleChange(e)}
                 />
                 <SimpleInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm Cassword"
                    value={confirmPassword}
                    onChange={(e) => handleChange(e)}
                 />

                 <SignupButton name="Sign Up" />
              </form>
           </div>

           <div className="second">
              <img src="/assets/images/img1.png" alt="" />
           </div>
        </div>
     </div>
  );
};

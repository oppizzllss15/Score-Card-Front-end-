// import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import swal from "sweetalert";

import { Logo } from "../../components/Logo";
import { SignupButton } from "../../components/SignupButton";
import { SimpleInput } from "../../components/SimpleInput";
import { signUp } from "../../utils/api";
import "./SignUp.css";

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    stack: "",
    squad: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      if (result) {
        swal("Success", result.message, "success");
      }
      // localStorage.setItem("token", result.token);
      // if(result.user) {
      //   navigate("/home")
      // }
    } catch (err) {
      console.log(err);
      swal("Error", " Signup failed", "error");
    }
  };

  return (
    <div>
      <div className="change">
        <div className="first">
          <div className="logo">
            <Logo />
          </div>

          <p className="go_back">Go back to login</p>
          <p className="reset">Sign Up</p>

          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <SimpleInput
              name="firstname"
              label="First Name"
              type="text"
              value={formData.firstname}
              placeholder="First Name"
              onChange={(e) => handleChange(e)}
            />
            <SimpleInput
              name="lastname"
              label="Last Name"
              type="text"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={(e) => handleChange(e)}
            />
            <SimpleInput
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <SimpleInput
              name="stack"
              label="Stack"
              type="text"
              placeholder="Enter your stack"
              value={formData.stack}
              onChange={(e) => handleChange(e)}
            />
            <SimpleInput
              name="squad"
              label="Squad"
              type="text"
              placeholder="Enter your Squad"
              value={formData.squad}
              onChange={(e) => handleChange(e)}
            />
            <SimpleInput
              name="phone"
              label="Phone Number"
              type="text"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={(e) => handleChange(e)}
            />

            <SimpleInput
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
            <SimpleInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Cassword"
              value={formData.confirmPassword}
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

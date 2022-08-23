import { useState, ChangeEvent, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";import axios from "axios";
import swal from "sweetalert";
import { loginUser } from "../../utils/api";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const navigate = useNavigate()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const onSubmit = async(e: FormEvent<HTMLFormElement>) =>{
  //   try{
  //     e.preventDefault()
  //     await axios.post('http://localhost:5008/users/login', formData)
  //     swal("Success", "Login successful", "success")

  //   }catch{
  //     swal("Error", "Login failed", "error")
  //   }
  // }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await loginUser(formData.email, formData.password);
    const result = await res;
    console.log(result);
    localStorage.setItem('token', result.token);
    // if(result.user) {
    //   navigate("/home")
    // }
  };

  return (
    <>
      <div className="loginBody">
        <div className="first">
          <div className="logo">
            <img src="/assets/images/logo.png" alt="a logo" />
            <p>Scorecard</p>
          </div>
          <p className="login-account">Login to your account</p>

          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <label className="fname">Email address</label>
            <br />
            <input
              type="text"
              id="fname"
              name="email"
              placeholder="Enter email address"
              className="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label className="password-text">Password</label>
            <br />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter password"
              className="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
            <h5 className="forget">Forgot password?</h5>
            <button className="login-button">Login</button>
          </form>
          <div className="signup">
            <p>
              Don't have an account? <a href="">Sign Up</a>
            </p>
          </div>
        </div>

        <div className="second">
          <img src="/assets/images/img1.png" alt="man with laptop" />
        </div>
      </div>
    </>
  );
}

export { Login };

import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData.email, formData.password);
      const result = await res;
      localStorage.setItem("token", result.token);
      Swal.fire({
        position: "center",
        title: "Successful",
        icon: "success",
        iconColor: "#93d413",
        showConfirmButton: true,
        confirmButtonColor: "#93d413",
        html: "Successfully logged in",
      });
    } catch (err) {
      Swal.fire({
        position: "top",
        title: "Error",
        icon: "error",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: "Try again",
        denyButtonColor: "#93d413",
        html: "Login failed",
      });
    }
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
            <Link to="/forgot/password"><h5 className="forget">Forgot password?</h5></Link>
            <button className="login-button">Login</button>
          </form>
          <div className="signup">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
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

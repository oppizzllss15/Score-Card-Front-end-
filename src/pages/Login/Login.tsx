import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SimpleInput } from "../../components/SimpleInput";
import Swal from "sweetalert2";
import { loginUser } from "../../utils/api";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [passwordVisible, setPasswordVisible] = useState(true);
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await loginUser(formData.email, formData.password);
    const result = await res;
    if (result.error) {
      Swal.fire({
        position: "top",
        title: "Error",
        icon: "error",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: "Try again",
        denyButtonColor: "#93d413",
        html: `${result.error}`,
      });
      return;
    } else {
      localStorage.setItem("token", result.token);
      localStorage.setItem("Id", result.user._id);
      localStorage.setItem("User", result.user.firstname);
      localStorage.setItem("lastname", result.user.lastname);
      localStorage.setItem("role", result.user.position);
      localStorage.setItem("imageurl", result.user.profile_img);

      if (result.user.grades) {
        navigate("/userdashboard");
        return;
      }

      navigate("/dashboard");
      setFormData({
        email: "",
        password: "",
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
              type="email"
              id="name"
              name="email"
              placeholder="Enter email address"
              className="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            {/* <SimpleInput
                    name="email"
                    label="Email address"
                    type="text"
                    value={formData.email}
                    placeholder="Enter email address"
                    onChange={(e) => handleChange(e)}
                 /> */}
            <br />
            <label className="password-text">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
            <Link to="/forgot/password">
              <h5 className="forget">Forgot password?</h5>
            </Link>
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

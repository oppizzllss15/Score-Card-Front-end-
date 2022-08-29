import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { resetAccountPassword } from "../../utils/api";
import Swal from "sweetalert2";
import "./Reset.css";

const Reset = () => {
  const params: any = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordHandler = (e: any) => {
    setNewPassword(e.target.value.trim());
  };

  const confirmPasswordHandler = (e: any) => {
    setConfirmPassword(e.target.value.trim());
  };

  const submitPasswords = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return Swal.fire({
        position: "top",
        text: "Passwords do not match",
        confirmButtonColor: "#93d413",
      });
    }

    setNewPassword("");
    setConfirmPassword("");
    const res = await resetAccountPassword(
      params.id,
      params.token,
      newPassword,
      confirmPassword
    );

    if (res.message && res.message.match(/successfully changed/gi)) {
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: `${res.message}`,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: "Thumbs up, great!",
          confirmButtonColor: "#93d413",
          footer: '<a href="">Go to Login?</a>',
        });
      }, 1000);
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
    <div className="change">
      <div className="first">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="" />
          <p>Scorecard</p>
        </div>

        <Link to="/login">
          <p className="go_back">Go back to login</p>
        </Link>
        <p className="reset">Reset Password</p>
        <p className="please">Please choose your new password</p>

        <form onSubmit={submitPasswords}>
          <label htmlFor="password">
            <p className="password_word">Password</p>

            <div className="visible">
              <input
                value={newPassword}
                onChange={passwordHandler}
                type="password"
                placeholder="Enter password"
                className="inp"
              />

              <button className="bg">
                <AiFillEyeInvisible />
              </button>
            </div>
          </label>

          <label htmlFor="password">
            <p className="password_word">New Password</p>

            <div className="visible">
              <input
                value={confirmPassword}
                onChange={confirmPasswordHandler}
                type="password"
                placeholder="Enter new password"
                className="inp"
              />
              <button className="bg">
                <AiFillEyeInvisible />
              </button>
            </div>
          </label>
          <br />
          <button type="submit" className="password_btn">
            Change Password
          </button>
        </form>
      </div>

      <div className="second">
        <img src="/assets/images/img1.png" alt="" />
      </div>
    </div>
  );
};
export { Reset };

import "./Reset.css";
import { AiFillEyeInvisible } from "react-icons/ai";

const Reset = () => {
  return (
    <div className="change">
      <div className="first">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="" />
          <p>Scorecard</p>
        </div>

        <p className="go_back">Go back to login</p>
        <p className="reset">Reset Password</p>
        <p className="please">Please choose your new password</p>

        <form action="" method="post">
          <label htmlFor="password">
            <p className="password_word">Password</p>

            <div className="visible">
              <input type="text" placeholder="Enter pasword" className="inp" />

              <button className="bg">
                <AiFillEyeInvisible />
              </button>
            </div>
          </label>

          <label htmlFor="password">
            <p className="password_word">New Password</p>

            <div className="visible">
              <input
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
          <button className="password_btn">Change Password</button>
        </form>
      </div>

      <div className="second">
        <img src="/assets/images/img1.png" alt="" />
      </div>
    </div>
  );
};
export { Reset };

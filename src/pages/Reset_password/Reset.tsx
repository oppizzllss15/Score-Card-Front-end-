import { useParams } from "react-router-dom";
import { useState } from "react";
import "./Reset.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { resetAccountPassword } from "../../utils/api";
import Modal from "../../components/Message-modal.component";

const Reset = () => {
  const params: any = useParams();

  const [resp, setResp] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
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
      return alert("Passwords do not match");
    }

    setNewPassword("")
    setConfirmPassword("")
    const res = await resetAccountPassword(
      params.id,
      params.token,
      newPassword,
      confirmPassword
    );
    if (res.message) setResp(res.message);
    else setResp(res.error);

    setTimeout(() => {
      setModalOpen(true)
    }, 2000)
  };

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
          <button type="submit" className="password_btn">Change Password</button>
        </form>
        {modalOpen && <Modal setOpenModal={setModalOpen} resp={resp} />}
      </div>

      <div className="second">
        <img src="/assets/images/img1.png" alt="" />
      </div>
    </div>
  );
};
export { Reset };

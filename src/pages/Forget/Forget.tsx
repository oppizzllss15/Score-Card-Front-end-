import { useState } from "react";
import "./Forget.css";
import EmailReset from "../../components/Reset-email.component";
import { sendResetLink } from "../../utils/api"
import Modal from "../../components/Message-modal.component"


export const Forget = () => {
  const [ resp, setResp ] = useState("")
  const [modalOpen, setModalOpen] = useState(false);


  const handleResetPass = async (email: string) => {
    const res = await sendResetLink(email)
    if (res.message) setResp(res.message)
    else setResp(res.error)
    console.log(resp)
  }

  return (
    <div>
      <div className="change">
        <div className="first">
          <div className="logo">
            <img src="/assets/images/logo.png" alt="" />
            <p>Scorecard</p>
          </div>

          <p className="go_back">Go back to login</p>
          <p className="reset">Forget Password?</p>
          <p className="please">
            Send a Link to your email to reset your password
          </p>
          <EmailReset handleResetPass={handleResetPass} setOpenModal={setModalOpen}/>
          {modalOpen && <Modal setOpenModal={setModalOpen} resp={resp}/>}
        </div>

        <div className="second">
          <img src="/assets/images/img1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

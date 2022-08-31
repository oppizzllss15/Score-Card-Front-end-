import { Link } from "react-router-dom";
import EmailReset from "../../components/Password-reset/Reset-email.component";
import { sendResetLink } from "../../utils/api";
import Swal from "sweetalert2";
import "./Forget.css";

export const Forget = () => {
  const handleResetPass = async (email: string) => {
    const res = await sendResetLink(email);

    if (res.message && !res.message.match(/not found/gi)) {
      setTimeout(() => {
        Swal.fire({
          // position: 'top',
          icon: "success",
          title: "Successful",
          text: `${res.message}`,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: "Thumbs up, great!",
          confirmButtonColor: "#93d413",
        });
      }, 1000);
    } else {
      setTimeout(() => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: `${res.message}`,
          showDenyButton: true,
          denyButtonText: "Try again",
          confirmButtonColor: "#93d413",
        });
      }, 1000);
    }
  };

  return (
     <div className="forgot-body">
        <div className="change">
           <div className="first">
              <div className="logo">
                 <img src="/assets/images/logo.png" alt="" />
                 <p>Scorecard</p>
              </div>

              <Link to="/login" style={{ textDecoration: "none" }}>
                 <p className="go_back" >Go back to login</p>
              </Link>
              <p className="reset">Forget Password?</p>
              <p className="please">
                 Send a Link to your email to reset your password
              </p>
              <EmailReset handleResetPass={handleResetPass} />
           </div>

           <div className="second">
              <img src="/assets/images/img1.png" alt="" />
           </div>
        </div>
     </div>
  );
};

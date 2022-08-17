import "./Forget.css";

export const Forget = () => {
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
              <p className="please">Send a Link to your email to reset your password</p>

              <form action="" method="post">
                 <label htmlFor="password">
                    <p className="password_word">Email address</p>

                    <div className="visible">
                       <input
                          type="text"
                          placeholder="Enter email address"
                          className="inp"
                       />                       
                    </div>
                 </label>

                
                 <br />
                 <button className="password_btn">Send Reset Link</button>
              </form>
           </div>

           <div className="second">
              <img src="/assets/images/img1.png" alt="" />
           </div>
        </div>
     </div>
  );
}

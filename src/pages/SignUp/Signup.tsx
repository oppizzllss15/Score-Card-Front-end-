import { Logo } from "../../components/Logo"
import { SignupButton} from "../../components/SignupButton"
import { SimpleInput} from "../../components/SimpleInput"
import "./SignUp.css"

export const Signup = () => {
  return (
    <div>

<div className="change">
           <div className="first">
              <div className="logo">
                <Logo />
              </div>

              <p className="go_back">Go back to login</p>
              <p className="reset">Sign Up</p>
           

              <form action="" method="post">
                 
                 <SimpleInput name="First Name" type="text" placeholder="first name"/>
                 <SimpleInput name="Last Name" type="text" placeholder="last name"/>
                 <SimpleInput name="Email" type="email" placeholder="email"/>

                 <SimpleInput name="Password" type="password" placeholder="password"/>
                 <SimpleInput name="Confirm Password" type="password" placeholder="Confirm password"/>

                 <SignupButton name="Sign Up" />





              </form>
           </div>

           <div className="second">
              <img src="/assets/images/img1.png" alt="" />
           </div>
        </div>


    </div>
  )
}

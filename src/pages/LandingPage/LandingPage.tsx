import React from 'react'
import { Logo } from '../../components/Logo'
import "./LandingPage.css"
import {
   AiFillInstagram,
   AiOutlineTwitter,
   AiFillYoutube,
} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';




export const LandingPage = () => {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/login")
   }
  return (
     <div>
        <div className="landnavbar">
           <div className="landlogo">
              <Logo />
           </div>
           <div className="navlist">
              <p>Home</p>
              <p>About</p>
              <p>Learnings</p>
              <p>Contact</p>
              <button onClick={handleClick}>Login</button>
           </div>
        </div>

        <div className="describeimg">
           <div className="imgtex">
              <p>You can learn anything, anywhere.</p>
           </div>
           <div className="smallimtx">
              <p>
                 Education is the process of facilitating learning, or the
                 acquisition of knowledge, skills, values,beliefs and habits.
              </p>
           </div>
           <div className="secondb">
              <button>Get Started</button>
           </div>
        </div>

        <div className="trackweeklyassimg">
           <div className="whyscore">
              <p className="ss">Why Scorecard?</p>
              <p className="tt">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Feugiat eget ipsum, sed praesent.
              </p>
              <button className="btwhy">Get Started</button>
           </div>
           <div className="whyimage">
              <img src="/assets/images/whytwo.png" alt="imageof a guy" />
           </div>
        </div>

        <div className="trust">
           <p className="uu">Trusted by over 1,500 Students</p>
           <button>Get Started</button>
        </div>

        <div className="patner-block">
           <p className="ff">Our Partners</p>

           <div className="patner">
              <div >
                 <img className="a" src="/assets/images/abeg 2.png" alt="a" />
              </div>

              <div className="a">
                 <img src="/assets/images/access_bank.png" alt="a" />
              </div>
              <div className="a">
                 <img src="/assets/images/bolt 1.png" alt="a" />
              </div>
              <div className="a">
                 <img src="/assets/images/first_bank 1.png" alt="a" />
              </div>
              <div className="a">
                 <img src="/assets/images/airtel 1.png" alt="a" />
              </div>
           </div>
        </div>

        <div className="footer">
           <div className="scorg">
              <p>
                 Score<span className="card">card</span>
              </p>
           </div>

           <div className="list-footer">
              <p>Home</p>
              <p>About</p>
              <p>Learning</p>
              <p>Contact</p>
           </div>

           <div className="end">
              <div className="copywrite">
                 <p>© 2022 Scorecard. All rights reserved</p>
              </div>

              <div className="socialicon">
                 <AiFillInstagram />
                 <AiOutlineTwitter />
                 <AiFillYoutube />
              </div>
           </div>

        </div>
     </div>
  );
}

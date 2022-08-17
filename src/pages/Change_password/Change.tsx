import React from 'react'

import "./Change.css"

export const Change = () => {
  return (
     <div>
          <div className="head">
              <p className='change_word'>Change Password</p>
        </div>

        <div className="box">
           <div className="form-box">
              <p className="top-text">
                 YOUR NEW PASSWORD MUST BE DIFFERENT FROM YOUR PREVIOUS PASSWORD
              </p>

              <form action="" method="post" className="from">
                 <label className="newpassword" htmlFor="">
                    New Password
                 </label>
                 <input type="text" />

                 <label className="newpassword" htmlFor="">
                    Confirm Password
                 </label>
                 <input type="text" />

                 <button className="btn_change">Save</button>
              </form>
           </div>
        </div>
     </div>
  );
}

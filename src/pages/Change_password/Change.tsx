import { useState, ChangeEvent, FormEvent } from "react";
import "./Change.css";
import { changeUserPassword } from "../../utils/api";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";


export const Change = () => {
  const [formdata, setFormdata] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await changeUserPassword(
      formdata.newPassword,
      formdata.confirmPassword
    );
    const result = await res;
    localStorage.setItem("token", result.token);
  };

  return (
     <DashboardLayout>
        <div className="changepass-all">
           <div className="head">
              <p className="change_word">Change Password</p>
           </div>

           <div className="box">
              <div className="form-box">
                 <p className="top-text">
                    YOUR NEW PASSWORD MUST BE DIFFERENT FROM YOUR PREVIOUS
                    PASSWORD
                 </p>

                 <form onSubmit={(e) => onSubmit(e)} className="from2">
                    <label className="newpassword" htmlFor="">
                       New Password
                    </label>
                    <input
                       type="text"
                       name="newPassword"
                       placeholder="New Password"
                       onChange={(e) => handleChange(e)}
                       value={formdata.newPassword}
                    />

                    <label className="newpassword" htmlFor="">
                       Confirm Password
                    </label>
                    <input
                       type="text"
                       name="confirmPassword"
                       placeholder="Confirm Password"
                       onChange={(e) => handleChange(e)}
                       value={formdata.confirmPassword}
                    />
                    {/* <PasswordInput placeholder="password" name="Confirm Password" /> */}
                    <button className="btn_change">Save</button>
                 </form>
              </div>
           </div>
        </div>
     </DashboardLayout>
  );
};

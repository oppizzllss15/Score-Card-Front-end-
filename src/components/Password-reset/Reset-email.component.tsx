import { useState } from "react";

interface Props {
  handleResetPass: (email: string) => void;
}

const EmailReset = ({ handleResetPass }: Props) => {
  const [email, setEmail] = useState("");

  const changeHandler = (e: any) => {
    setEmail(e.target.value.trim());
  };

  const submitEmail = (e: any) => {
    e.preventDefault();
    if (email.length > 0) handleResetPass(email);
    setEmail("");
  };

  return (
    <form onSubmit={submitEmail}>
      <label htmlFor="password">
        <p className="password_word">Email address</p>

        <div className="visible">
          <input
            value={email}
            onChange={changeHandler}
            type="email"
            placeholder="Enter email address"
            className="inp"
            required
          />
        </div>
      </label>
      <br />
      <button className="password_btn">Send Reset Link</button>
    </form>
  );
};

export default EmailReset;

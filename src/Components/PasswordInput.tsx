import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import "./component.css";

type Button = {
  placeholder: string;
  name: string;
};

export const PasswordInput = (props: Button) => {
  const [reveal, setReveal] = useState(false);

  const first = (e: any) => {
    e.preventDefault();

    if (reveal) {
      setReveal(false);
    } else {
      setReveal(true);
    }
  };

  return (
    <div>
      <p>{props.name}</p>

      <div className="visible">
        <input
          type={reveal ? "text" : "password"}
          placeholder={props.placeholder}
          className="input-text"
        />
        <button className="bg" onClick={first}>
          {reveal ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </div>
    </div>
  );
};

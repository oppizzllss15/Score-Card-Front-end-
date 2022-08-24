import { FormEvent } from "react";
import "./component.css";


type Texts = {
   name?: string;
   handleSubmit?: any;
};

export const SignupButton = (props: Texts) => {
  return (
     <div>
        <button className="password_btn" onClick={props.handleSubmit}>
           {props.name}
        </button>
     </div>
  );
};

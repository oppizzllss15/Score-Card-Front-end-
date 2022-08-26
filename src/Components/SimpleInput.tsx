import { ChangeEvent } from "react";
import "./component.css";

type Words = {
  name?: string;
  label?: string;
  placeholder?: string;
  type?: any;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SimpleInput = (props: Words) => {
  return (
    <div>
      <div className="simpleInput">
        <label className="simpleText" htmlFor="">
          <p>{props.label}</p>
        </label>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className="simple"
          required
        />
      </div>
    </div>
  );
};

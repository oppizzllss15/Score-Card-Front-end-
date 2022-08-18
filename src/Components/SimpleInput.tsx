import React, { ChangeEvent } from "react";
import "./component.css";

type Words = {
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
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
        />
      </div>
    </div>
  );
};

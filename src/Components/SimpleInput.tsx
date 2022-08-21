import "./component.css";

type Words = {
  name?: string;
  placeholder?: string;
  type?: string;
};

export const SimpleInput = (props: Words) => {
  return (
    <div>
      <div className="simpleInput">
        <label className="simpleText" htmlFor="">
          <p>{props.name}</p>
        </label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="simple"
        />
      </div>
    </div>
  );
};

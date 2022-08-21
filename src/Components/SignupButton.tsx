import "./component.css";

type Texts = {
    name?: string;
}

export const SignupButton = (props: Texts) => {
  return (
     <div>
          <button className="password_btn">{props.name}</button>
     </div>
  );
}


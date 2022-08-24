import React, { FC } from "react";
import microscope from "../../images/microscope.svg";
import styles from "./Error.module.css";
import "../Admin-dashboard/Admin.css"

interface Prop {
    getFormModal: () => void
}
const EmptyStack = ({getFormModal}: Prop)=> {
  return (
    <>
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["dashboard-div"]}`}>
          <h3 className={`${styles["dashboard"]}`}> Dashboard </h3>
        </div>
        <div className={`${styles["dashboard-container"]}`}>
          <div className={`${styles["microscope"]}`}>
            <img src={microscope} alt="" style={{width:"200px", height:"200px"}}/>
          </div>
          <div className={`${styles["oops"]}`}>
            <h2 className="oops">Ooopss...</h2>
          </div>
          <div className={`${styles["empty-stack"]}`}>
            <p>
              {" "}
              You have not created any Stack yet click on{" "}
              <strong>create Stack</strong>
              <br /> to get started
            </p>
          </div>
          <div onClick={getFormModal} className={`${styles["oops"]}`}>
            <button className="create-stack">
              + Create Stack
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmptyStack;

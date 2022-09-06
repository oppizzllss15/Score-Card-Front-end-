import React, { FC } from "react";
import styles from "./Error.module.css";
import "../Admin-dashboard/Admindashboard.css";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";

interface Prop {
  getFormModal: () => void;
}
const EmptyStack = ({ getFormModal }: Prop) => {
  const role = localStorage.getItem("role");
  
  return (
    <div className="emptyplain">
      <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["dashboard-div"]}`}>
          <h3
            className={`${styles["dashboard"]}`}
            style={{ marginLeft: "27rem" }}
          >
            {" "}
            Dashboard{" "}
          </h3>
        </div>
        <div className={`${styles["dashboard-container"]}`}>
          <div className={`${styles["microscope"]}`}>
            <img
              src="./assets/images/microscope.svg"
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
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
          {role === "superadmin" && (
            <div onClick={getFormModal} className={`${styles["oops"]}`}>
              <button className="create-stack">+ Create Stack</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default EmptyStack;

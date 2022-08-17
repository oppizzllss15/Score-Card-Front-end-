import React from "react";
import "./Modal.css";
interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  resp: string;
}

const Modal = ({ setOpenModal, resp }: Props) => {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              x
            </button>
          </div>
          <div className="title">
            <h1>Alert!</h1>
          </div>
          <div className="body">
            <p>{resp}</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

import { useState, Fragment } from "react";
import { Selectoption } from "../Selectoption";
import { CgClose } from "react-icons/cg";
import Swal from "sweetalert2";
import "./dev.management.css";

interface Prop {
  users: {
    id: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    stack?: string;
    squad?: string;
  };
  activateUser: (id: string) => void;
  deactivateUser: (id: string) => void;
  deleteUser: (id: string) => void;
  updateUserAcct: (
    id: any,
    firstname: string,
    lastname: string,
    squad: string,
    stack: string
  ) => void;
  setActive: (id: string) => void;
  selectedItem: string;
}

const defaultFormField = {
  firstname: "",
  lastname: "",
  stack: "",
  squad: "",
};

export default function Devs({
  users,
  activateUser,
  deactivateUser,
  deleteUser,
  updateUserAcct,
  setActive,
  selectedItem,
}: Prop) {
  const [isActive, setIsActive] = useState(false);
  const [updateCall, setUpdateCall] = useState(false);
  const [formData, setFormData] = useState(defaultFormField);
  const { firstname, lastname, stack, squad } = formData;
  const [uid] = useState(users.id);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const handleClick = (id: string) => {
    setActive(id);
    if (isActive) setIsActive(false);
    else {
      setIsActive(true);
      setUpdateCall(false);
    }
  };

  const handleActivate = (e: any) => {
    e.preventDefault();
    activateUser(e.target.name);
  };

  const handleDeactivate = (e: any) => {
    e.preventDefault();
    deactivateUser(e.target.name);
  };

  const handleEdit = (e: any) => {
    e.preventDefault();
    if (updateCall) setUpdateCall(false);
    else setUpdateCall(true);
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    Swal.fire({
      icon: "info",
      text: "Confirm delete?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
      confirmButtonColor: "#93d413",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(e.target.name);
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          text: "Changes are not saved",
          confirmButtonColor: "#93d413",
        });
      }
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    updateUserAcct(
      uid,
      formData.firstname,
      formData.lastname,
      formData.squad,
      formData.stack
    );
    setUpdateCall(false);
  };

  const handleWindow = (e: any) => {
    if (isActive) setIsActive(false);
  };

  return (
    <>
      <tr onClick={handleWindow} className="table-row">
        <td>
          {users.firstname} {users.lastname}
        </td>
        <td>{users.email}</td>
        <td>{users.stack}</td>
        <td>{users.squad}</td>
        <td className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => handleClick(users.id)}
          >
            ...
          </button>
          {isActive && users.id === selectedItem ? (
            <div className="dropdown-content">
              <div className="dropdown-item">
                <button
                  className="dropdown-item-btn"
                  name={users.id}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </div>
              <div className="dropdown-item">
                <button
                  className="dropdown-item-btn"
                  name={users.id}
                  onClick={handleActivate}
                >
                  Activate
                </button>
              </div>
              <div className="dropdown-item">
                <button
                  className="dropdown-item-btn"
                  name={users.id}
                  onClick={handleDeactivate}
                >
                  Deactivate
                </button>
              </div>
              <div className="dropdown-item">
                <button
                  className="dropdown-item-btn"
                  name={users.id}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : null}
          {updateCall && (
            <div className="form-update">
              <div className="form-header">
                {/* <p className="top-text">User Details</p> */}
                <button onClick={handleEdit} className="top-text-btn"><CgClose /></button>
              </div>

              <form onSubmit={(e) => onSubmit(e)}>
                <label className="control-text" htmlFor="">
                  Firstname
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder={users.firstname}
                  onChange={(e) => handleChange(e)}
                  value={firstname}
                />

                <label className="control-text" htmlFor="">
                  Lastname
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder={users.lastname}
                  onChange={(e) => handleChange(e)}
                  value={lastname}
                />

                <label className="control-text stack" htmlFor="">
                  Stack
                </label>
                  <Selectoption
                    label="stack"
                    name="stack"
                    value={stack}
                    handleChange={handleChange}
                  />
                <label className="control-text" htmlFor="">
                  Squad
                </label>
                <input
                  type="text"
                  name="squad"
                  placeholder={users.squad}
                  onChange={(e) => handleChange(e)}
                  value={squad}
                />
                <button type="submit" className="btn_change">
                  Update
                </button>
              </form>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}

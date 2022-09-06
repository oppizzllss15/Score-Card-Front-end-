import { useState, Fragment } from "react";
import Swal from "sweetalert2";
import { CgClose } from "react-icons/cg";
import "../Dev-management/dev.management.css";
import { IAdmin, IAdminWithStack } from "../../typings";
import { Selectoption } from "../Selectoption";

interface Prop {
  users: IAdminWithStack;

  activateUser: (status: string, adminId: string, adminName: string) => void;
  deactivateUser: (status: string, adminId: string, adminName: string) => void;
  deleteUser: (id: string, adminName: string) => void;
  updateUserAcct: (id: any, admin: IAdminWithStack) => void;
  setActive: (id: string) => void;
  selectedItem: string;
}

const defaultFormField = {
  firstname: "",
  lastname: "",
  phone: "",
  stack: "",
  squad: "",
};

export default function Admin({
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
  const [formData, setFormData] = useState(users);
  const { firstname, lastname, phone, stack, squad } = formData;
  const [uid] = useState(users._id);

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

  const handleActivate = (e: any, adminName: string) => {
    e.preventDefault();
    activateUser("activate", e.target.name, adminName);
  };

  const handleDeactivate = (e: any, adminName: string) => {
    e.preventDefault();
    deactivateUser("deactivate", e.target.name, adminName);
  };

  const handleEdit = (e: any) => {
    e.preventDefault();

    if (updateCall) setUpdateCall(false);
    else setUpdateCall(true);
  };

  const handleDelete = (e: any, adminName: string) => {
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
        deleteUser(e.target.name, adminName);
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          text: "Changes are not saved",
          confirmButtonColor: "#93d413",
        });
      }
    });
  };

  const updateData = (e: any) => {
    e.preventDefault();

    updateUserAcct(uid, formData);
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
            onClick={() => handleClick(users.id as string)}
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
                  onClick={(e) => {
                    handleActivate(e, users.firstname as string);
                  }}
                >
                  Activate
                </button>
              </div>
              <div className="dropdown-item">
                <button
                  className="dropdown-item-btn"
                  name={users.id}
                  onClick={(e) => {
                    handleDeactivate(e, users.firstname as string);
                  }}
                >
                  Deactivate
                </button>
              </div>
              <div className="dropdown-item">
                <button
                  className="dropdown-item-btn"
                  name={users.id}
                  onClick={(e) => {
                    handleDelete(e, users.firstname as string);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : null}
          {updateCall && (
            <div className="form-update">
              {/* <p className="top-text">Update User Details</p> */}
              <div className="form-header">
                <button onClick={handleEdit} className="top-text-btn">
                  <CgClose />
                </button>
              </div>
              <form onSubmit={(e) => updateData(e)}>
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

                <label className="control-text" htmlFor="">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+234-812-3456-789"
                  onChange={(e) => handleChange(e)}
                  value={phone}
                />

                <div>
                  <label className="control-text">Stacks</label>
                  <Selectoption
                    label="stack"
                    name="stack"
                    value={users.stack as string}
                    handleChange={handleChange}
                  />
                </div>

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

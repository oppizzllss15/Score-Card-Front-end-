import { useState } from "react";
import Swal from "sweetalert2";
import "./dev.management.css";

interface Prop {
  users:{
  id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  stack?: string;
  squad?: string;
  password?: string;
  status?: string;
  },
  activateUser: (id: string) => void,
  deactivateUser: (id: string) => void,
  deleteUser: (id: string) => void,
}

export default function Devs({ users, activateUser, deactivateUser, deleteUser }: Prop) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    if (isActive) setIsActive(false);
    else setIsActive(true);
  };

  const handleActivate = (e: any) => {
    e.preventDefault();
    activateUser(e.target.name)
  };

  const handleDeactivate = (e: any) => {
    e.preventDefault();
    deactivateUser(e.target.name)
  };

  const handleEdit = (e: any) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    Swal.fire({
      icon: "info",
      text: 'Confirm delete?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      confirmButtonColor: "#93d413",
    }).then((result) => {

      if (result.isConfirmed) {
        deleteUser(e.target.name);
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          text: 'Changes are not saved',
          confirmButtonColor: "#93d413",
        })
      }
    })
  };

  return (
    <>
      <tr className="table-row">
        <td>
          {users.firstname} {users.lastname}
        </td>
        <td>{users.email}</td>
        <td>{users.stack}</td>
        <td>{users.squad}</td>
        <td className="dropdown">
          <button className="dropdown-btn" onClick={handleClick}>
            ...
          </button>
          {isActive && (
            <div className="dropdown-content">
              <div className="dropdown-item">
                <button name={users.id} onClick={handleEdit}>
                  Edit
                </button>
              </div>
              <div className="dropdown-item">
                <button name={users.id} onClick={handleActivate}>
                  Activate
                </button>
              </div>
              <div className="dropdown-item">
                <button name={users.id} onClick={handleDeactivate}>
                  Deactivate
                </button>
              </div>
              <div className="dropdown-item">
                <button name={users.id} onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}

import { useState } from "react";
import { addEditScore } from "../utils/api";
import { CgClose } from "react-icons/cg";
import Swal from "sweetalert2";
import "./component.css";
import "./Dev-management/dev.management.css";

interface Prop {
  user: {
    Sn?: number;
    id: string;
    firstname: string;
    lastname: string;
    week: [
      {
        week: number;
        agile: number;
        weekly_task: number;
        assessment: number;
        algorithm: number | string;
        cummulative: number;
      }
    ];
  };
  ind: number;
  setActive: (id: string) => void;
  selectedItem: string;
  check: (week: number) => void;
}

const defaultFormField = {
  agile: 0,
  algorithm: 0,
  assessment: 0,
  week: 0,
  weekly_task: 0,
};

const TableList = ({ user, ind, setActive, selectedItem, check }: Prop) => {
  const [isActive, setIsActive] = useState(false);
  const [updateCall, setUpdateCall] = useState(false);
  const [addCall, setAddCall] = useState(false);
  const [formData, setFormData] = useState(defaultFormField);
  const { agile, algorithm, assessment, weekly_task, week } = formData;
  const [uid] = useState(user.id);

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

  const handleEdit = (e: any) => {
    e.preventDefault();
    if (updateCall) setUpdateCall(false);
    else setUpdateCall(true);
  };

  const handleAddScore = (e: any) => {
    e.preventDefault();
    if (addCall) setAddCall(false);
    else setAddCall(true);
  };

  const editScore = (e: any) => {
    e.preventDefault();
    const type = "edit";
    Swal.fire({
      icon: "info",
      text: "Confirm update score?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
      confirmButtonColor: "#93d413",
    }).then((result) => {
      if (result.isConfirmed) {
        addEditScore(
          type,
          uid,
          week,
          agile,
          algorithm,
          assessment,
          weekly_task
        ).then((res) => {
          if (res.message && res.message.match(/updated successfully/gi)) {
            setTimeout(() => {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Successful",
                text: `${res.message}`,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: "Thumbs up, great!",
                confirmButtonColor: "#93d413",
              });
            }, 100);
          } else {
            setTimeout(() => {
              Swal.fire({
                position: "top",
                icon: "error",
                title: "Failed",
                text: `${res.error}`,
                showDenyButton: true,
                denyButtonText: "Try again",
                confirmButtonColor: "#93d413",
              });
            }, 100);
          }
        });
        setFormData(defaultFormField);
        setUpdateCall(false);
        check(Number(week));
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          text: "Changes are not saved",
          confirmButtonColor: "#93d413",
        });
      }
    });
  };

  const addScore = (e: any) => {
    e.preventDefault();
    const type = "add";
    Swal.fire({
      icon: "info",
      text: "Confirm update score?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
      confirmButtonColor: "#93d413",
    }).then((result) => {
      if (result.isConfirmed) {
        addEditScore(
          type,
          uid,
          week,
          agile,
          algorithm,
          assessment,
          weekly_task
        ).then((res) => {
          console.log(res);
          if (res.message && res.message.match(/updated successfully/gi)) {
            setTimeout(() => {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Successful",
                text: `${res.message}`,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: "Thumbs up, great!",
                confirmButtonColor: "#93d413",
              });
            }, 100);
          } else {
            setTimeout(() => {
              Swal.fire({
                position: "top",
                icon: "error",
                title: "Failed",
                text: `${res.error}`,
                showDenyButton: true,
                denyButtonText: "Try again",
                confirmButtonColor: "#93d413",
              });
            }, 100);
          }
        });
        setFormData(defaultFormField);
        setAddCall(false);
        check(Number(week));
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          text: "Changes are not saved",
          confirmButtonColor: "#93d413",
        });
      }
    });
  };

  const handleWindow = (e: any) => {
    if (isActive) setIsActive(false);
  };

  return (
    <>
      {user.week.length > 0 && (
        <tr onClick={handleWindow} key={user.id} className="tr_score">
          <td>{ind + 1}</td>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>{user.week[0].algorithm}</td>
          <td>{user.week[0].weekly_task}</td>
          <td>{user.week[0].assessment}</td>
          <td>{user.week[0].agile}</td>
          <td>{user.week[0].cummulative}</td>
          <td className="dropdown">
            <button className="dropdown-btn" onClick={() => handleClick(uid)}>
              ...
            </button>
            {isActive && uid === selectedItem ? (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <button
                    className="dropdown-item-btn"
                    name={uid}
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                </div>
                <div className="dropdown-item">
                  <button
                    className="dropdown-item-btn"
                    name={uid}
                    onClick={handleAddScore}
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : null}
            {updateCall && (
              <div className="form-update">
                <div className="form-header">
                  <p className="control-text">
                    {user.firstname} {user.lastname} performance
                  </p>
                  <button onClick={handleEdit} className="top-text-btn">
                    <CgClose />
                  </button>
                </div>

                <form onSubmit={(e) => editScore(e)}>
                  <label className="newpassword" htmlFor="">
                    Week
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="15"
                    name="week"
                    placeholder="week"
                    onChange={(e) => handleChange(e)}
                    value={week}
                  />

                  <label className="newpassword" htmlFor="">
                    Algorithm
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="algorithm"
                    placeholder="Algorithm"
                    onChange={(e) => handleChange(e)}
                    value={algorithm}
                  />

                  <label className="newpassword" htmlFor="">
                    Agile Test
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="agile"
                    placeholder="Agile"
                    onChange={(e) => handleChange(e)}
                    value={agile}
                  />

                  <label className="newpassword" htmlFor="">
                    Assessment Test
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="assessment"
                    placeholder="Assessment"
                    onChange={(e) => handleChange(e)}
                    value={assessment}
                  />

                  <label className="newpassword" htmlFor="">
                    Weekly Task
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="weekly_task"
                    placeholder="Weekly Task"
                    onChange={(e) => handleChange(e)}
                    value={weekly_task}
                  />
                  <button type="submit" className="btn_change">
                    Edit Score
                  </button>
                </form>
              </div>
            )}
            {addCall && (
              <div className="form-update">
                <div className="form-header">
                  <p className="control-text">
                    {user.firstname} {user.lastname} performance
                  </p>
                  <button onClick={handleAddScore} className="top-text-btn">
                    <CgClose />
                  </button>
                </div>

                <form onSubmit={(e) => addScore(e)}>
                  <label className="newpassword" htmlFor="">
                    Week
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="15"
                    name="week"
                    placeholder="week"
                    onChange={(e) => handleChange(e)}
                    value={week}
                  />

                  <label className="newpassword" htmlFor="">
                    Algorithm
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="algorithm"
                    placeholder="Algorithm"
                    onChange={(e) => handleChange(e)}
                    value={algorithm}
                  />

                  <label className="newpassword" htmlFor="">
                    Agile Test
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="agile"
                    placeholder="Agile"
                    onChange={(e) => handleChange(e)}
                    value={agile}
                  />

                  <label className="newpassword" htmlFor="">
                    Assessment Test
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="assessment"
                    placeholder="Assessment"
                    onChange={(e) => handleChange(e)}
                    value={assessment}
                  />

                  <label className="newpassword" htmlFor="">
                    Weekly Task
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    name="weekly_task"
                    placeholder="Weekly Task"
                    onChange={(e) => handleChange(e)}
                    value={weekly_task}
                  />
                  <button type="submit" className="btn_change">
                    Add Score
                  </button>
                </form>
              </div>
            )}
          </td>
        </tr>
      )}
    </>
  );
};

export default TableList;

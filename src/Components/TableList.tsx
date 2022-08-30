import { useState } from "react";
import { CgClose } from "react-icons/cg";
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
}

const defaultFormField = {
  agile: 0,
  algorithm: 0,
  assessment: 0,
  week: 0,
  weekly_task: 0,
};

const TableList = ({ user, ind, setActive, selectedItem }: Prop) => {
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
    console.log(formData);
    setFormData(defaultFormField)
    setUpdateCall(false);
  };

  const addScore = (e: any) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormField)
    setAddCall(false)
  };

  const handleWindow = (e: any) => {
    if (isActive) setIsActive(false);
  };

  return (
    <tr onClick={handleWindow} key={user.id}>
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
  );
};

export default TableList;

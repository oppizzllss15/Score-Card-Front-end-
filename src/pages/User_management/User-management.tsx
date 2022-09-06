import { useState, useEffect } from "react";
import Devs from "../../components/Dev-management/dev-management.component";
import { BackArrowIcon } from "../../assets/backArrowIcon";
import { useNavigate } from "react-router-dom";
import {
  devManagement,
  activateDevAccount,
  deactivateDevAccount,
  deleteDevAccount,
  updateDevAccount,
} from "../../utils/api";
import Swal from "sweetalert2";
import "./User-management.css";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";

interface UserType {
  id: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  stack?: string;
  squad?: string;
}

const DecadevManagement = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  const history = useNavigate();

  const getDevs = async () => {
    try {
      const resp = await devManagement();
      if (resp.users) setData(resp.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDevs();
  }, []);

  const activateUser = async (id: string) => {
    const res = await activateDevAccount(id);

    if (res.message && res.message.match(/activated successfully/gi)) {
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
          text: `${res.message}`,
          showDenyButton: true,
          denyButtonText: "Try again",
          confirmButtonColor: "#93d413",
        });
      }, 100);
    }
  };

  const deactivateUser = async (id: string) => {
    const res = await deactivateDevAccount(id);

    if (res.message && res.message.match(/successfully deactivated/gi)) {
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
          text: `${res.message}`,
          showDenyButton: true,
          denyButtonText: "Try again",
          confirmButtonColor: "#93d413",
        });
      }, 100);
    }
  };

  const deleteUser = async (id: string) => {
    const res = await deleteDevAccount(id);

    if (res.message && res.message.match(/has been removed/gi)) {
      const filtered = data.filter((user: UserType) => user.id !== id);
      setData(filtered);
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
  };

  const setActive = (id: string) => {
    setItem(id);
  };

  const updateUserAcct = async (
    id: string,
    firstname: string,
    lastname: string,
    squad: string,
    stack: string
  ) => {
    const res = await updateDevAccount(
      id,
      firstname,
      lastname,
      squad,
      stack
    );

    if (res.message && res.message.match(/Updated successfully/gi)) {
      getDevs();
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
          text: `Something went wrong.`,
          showDenyButton: true,
          denyButtonText: "Try again",
          confirmButtonColor: "#93d413",
        });
      }, 100);
    }
  };

  return (
     <DashboardLayout>
        <div className="outer-box">
           {/* <div className="box-container"> */}
              <div className="link-container">
                 <button onClick={() => history(-1)} className="link-box">
                    <BackArrowIcon className="back-arrow" />
                    <p>Go back</p>
                 </button>
              </div>
              <div className="devs-box">
                 <h4>Decadevs</h4>
              </div>
              <div>
                 <table className="table-container">
                    <thead className="table-header">
                       <tr>
                          <th>Full Name</th>
                          <th>Email</th>
                          <th>Stack</th>
                          <th>Squad</th>
                          <th>Action</th>
                       </tr>
                    </thead>
                    <tbody>
                       {data.map((user: UserType) => (
                          <Devs
                             key={user.id}
                             users={user}
                             activateUser={activateUser}
                             deactivateUser={deactivateUser}
                             deleteUser={deleteUser}
                             updateUserAcct={updateUserAcct}
                             setActive={setActive}
                             selectedItem={item}
                          />
                       ))}
                    </tbody>
                 </table>
              </div>
           {/* </div> */}
        </div>
     </DashboardLayout>
  );
};

export default DecadevManagement;

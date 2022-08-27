import { useState, useEffect } from "react";
import Admin from "../../components/Admin-management/admin-management.component";
import { BackArrowIcon } from "../../assets/backArrowIcon";
import { useNavigate } from "react-router-dom";
import { getAdmins, ResponseDataType, deleteAdminData, updateAdminData, updateAdminActivationStatus, presentAlert } from "../../utils/adminApi"
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";

import "../User_management/User-management.css";

import { IAdmin, IAdminWithStack } from "../../typings";

const AdminManagement = () => {
  const [data, setData] = useState([] as IAdminWithStack[]);
  const [item, setItem] = useState("");
  const history = useNavigate();
  const [admins, setAdmins ] = useState([] as IAdmin[]);
  const [actionMessage, setActionMessage ] = useState('');
    
  const getAllAdmins = async () => {
    console.log("yesssss")
    try {
      const resp: any = await getAdmins();
      if (resp.data) setData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllAdmins();
  }, []);

  const activateUser = (status: string, adminId: string, adminName: string) => {
        const title = status === "deactivate" ? "Activate Admin" : "Deactivate Admin";
        
        presentAlert(title, `This action is on, ${adminName}`, console.log, 'fired').then(function () {
              updateAdminActivationStatus(status, adminId).then((data: ResponseDataType<IAdmin, unknown>) => {
                presentAlert( "Done!", `${adminName}'s ${status} Done!`, console.log, "success")
                setActionMessage(`${adminName} status updated successfully`)
              }).catch((ERR) => {
                  presentAlert('failed', 'failed to complete action', console.log, 'failed');
              })
            });
    }

  const deactivateUser = (status: string, adminId: string, adminName: string) => {
        const title = status === "deactivate" ? "Activate Admin" : "Deactivate Admin";
        
        presentAlert(title, `This action is on, ${adminName}`, console.log, 'fired').then(function () {
              updateAdminActivationStatus(status, adminId).then((data: ResponseDataType<IAdmin, unknown>) => {
                presentAlert( "Done!", `${adminName}'s ${status} Done!`, console.log, "success")
                setActionMessage(`${adminName} status updated successfully`)
              }).catch((ERR) => {
                  presentAlert('failed', 'failed to complete action', console.log, 'failed');
              })
            });
    }

  const deleteUser = (id: string, adminName: string) => {
        const title = "Delete Admin";
        
        presentAlert(title, `This action is on, ${adminName}`, console.log, 'fired').then(function () {
              deleteAdminData(id).then((data: ResponseDataType<boolean, string>) => {
                presentAlert( "Done!", `${adminName}' deletion Done!`, console.log, "success")
                setActionMessage(`${adminName} status updated successfully`)
              }).catch((ERR) => {
                  presentAlert('failed', 'failed to complete action', console.log, 'failed');
              })
        });

    }

  const setActive = (id: string) => {
    console.log(id);
    setItem(id);
  };

  const updateUserAcct = (admin: IAdminWithStack) => {
        let adminData: IAdminWithStack = {
            firstname: admin.firstname,
            lastname: admin.lastname,
            stack: admin.stack as string,
            email: admin.email,
            role: admin.role
        }

        
        updateAdminData(adminData, `${admin._id}`).then((res) => {
            let text = res.data ? `${admin.firstname} updated`: `Unable to complete action; [${res.message}]`
            presentAlert('Done', text, console.log, "success update");
        })
    }

  return (
    <DashboardLayout>
    <div className="outer-box">
      <div className="box-container">
        <div className="link-container">
          <button onClick={() => history(-1)} className="link-box">
            <BackArrowIcon className="back-arrow" />
            <p>Go back</p>
          </button>
        </div>
        <div className="devs-box">
          <h4>Admins</h4>
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
              {data.map((user: IAdminWithStack) => (
                <Admin
                  key={user.id}
                  users={user}
                  activateUser={activateUser}
                  deactivateUser={deactivateUser}
                  deleteUser={deleteUser}
                  updateUserAcct={updateUserAcct}
                  setActive={setActive}
                  selectedItem= {item}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default AdminManagement;

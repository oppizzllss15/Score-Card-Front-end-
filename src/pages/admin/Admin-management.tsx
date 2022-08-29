import { useState, useEffect } from "react";
import Admin from "../../components/Admin-management/admin-management.component";
import { BackArrowIcon } from "../../assets/backArrowIcon";
import { useNavigate } from "react-router-dom";
import { getAdmins, ResponseDataType, deleteAdminData, updateAdminData, updateAdminActivationStatus, presentAlert } from "../../utils/adminApi"
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";
import "../User_management/User-management.css";

import { IAdmin, IAdminWithStack, IStack } from "../../typings";
import { getAllStack } from "../../utils/api";

const AdminManagement = () => {
  const [data, setData] = useState([] as IAdminWithStack[]);
  const [item, setItem] = useState("");
  const history = useNavigate();
  const [actionMessage, setActionMessage ] = useState('');
  const [loadingState, setLoadingStaate] = useState(true);
  const getAllAdmins = async () => {
    
    try {
      const resp =  (await getAdmins()).data;
      
      const stackResponse = await getAllStack();
      const stacks: IStack[] = stackResponse.message.allStacks;
      
      const allAdminsWithStack: IAdminWithStack[] = resp.map((admin: IAdminWithStack) => {
        const stackArr: IStack = stacks.find((stack) => {return stack._id === admin.stack[0]}) as IStack;
        if(stackArr){
            admin.stack = stackArr.name;
          }else{ admin.stack = "NA"}
          
          admin.squad = `SQ${admin.squad?.toString().padStart(3,"0")}`
          
        return admin;
      })
      setData(allAdminsWithStack);
      setLoadingStaate(false);
      
      
    } catch (err) {
      
      console.log(err);
    }
  };

  useEffect(() => {
    getAllAdmins();
  }, [actionMessage]);

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

  const updateAdmin = (id: string, admin: IAdminWithStack) => {
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
            setActionMessage(`${admin.firstname} updated successfully`);
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
              {!loadingState && data.map((user: IAdminWithStack) => (
                <Admin
                  key={user.id}
                  users={user}
                  activateUser={activateUser}
                  deactivateUser={deactivateUser}
                  deleteUser={deleteUser}
                  updateUserAcct={updateAdmin}
                  setActive={setActive}
                  selectedItem= {item}
                />
              ))}
            {loadingState && (
              <div className="loading">
                <h4>Loading up Admins... </h4>
              </div>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default AdminManagement;

import { IAdmin, IAdminWithStack, IStack } from "../../typings";
import React, {  useState} from 'react';
import { presentAlert, updateAdminData } from "../../utils/adminApi";
import { text } from "node:stream/consumers";
//import 'bootstrap/dist/css/bootstrap.min.css'


export interface EditProps{
    admin: IAdminWithStack,
    stacks?: IStack[]
}
export function EditAdmin(prop: EditProps){
    const [admin, setAdmin] = useState({...prop.admin, stack: prop.admin.stack})
    
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const name = e.target.name;
        const value = e.target.value;

        setAdmin((prev) => { return { ...prev, [name]: value } })
    }
    function editAdmin(){
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
        <div className="row">
            <div>
                <form className="form-grou">
                    <h2>{ `Editing ${admin.firstname}`}</h2>
                    <div className="form-group form-group-lg">
                        <label htmlFor="firstname">firstname</label>
                        <input type="text" id="firstname" name="firstname" value={admin.firstname} onChange={(e) => { handleInputChange(e) }} className="form-control form-control-lg" required />
                    </div>
                    <div className="form-group form-group-lg">
                        <label htmlFor="lastname">lasttname</label>
                        <input type="text" id="lastname" name="lastname" value={admin.lastname} onChange={(e) => { handleInputChange(e) }} className="form-control form-control-lg" required />
                    </div>
                    <div className="form-group form-group-lg">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={admin.email} onChange={(e) => { handleInputChange(e) }} className="form-control form-control-lg" required />
                    </div>
                    <div className="form-group form-group-lg">
                        <label htmlFor="squad">Squad</label>
                        <input type="number" id="squad" name="squad" value={admin.squad} onChange={(e) => { handleInputChange(e) }} className="form-control form-control-lg input-lg" required />
                    </div>
                    <div className="form-group form-group-lg">
                        <label htmlFor="role">Role</label>
                        <select id="role" name="role" value={admin.role}  className="form-select form-select-lg ">
                            <option value="">Please Select</option>
                            <option value="SA">SA</option>
                            <option value="PA">PA</option>
                            
                        </select>
                    </div>
                    {/* <div className="form-group form-group-lg">
                        <label htmlFor="stack">Stack</label>
                        <select id="role" name="role" value={admin.role} >
                            <option value="">Please Select</option>
                            <option value="SA">SA</option>
                            <option value="PA">PA</option>
                            
                        </select>
                    </div> */}
                    <div className="form-group">
                        <button type="button" className="btn btn-primary btn-block" onClick={(e) => { editAdmin() }}> Save </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
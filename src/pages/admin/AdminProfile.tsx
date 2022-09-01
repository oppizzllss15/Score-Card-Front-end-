import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { IAdmin, IAdminWithStack } from '../../typings';
import { getAdminData, presentAlert, updateAdminData, uploadAdminProfilePicture } from '../../utils/adminApi';
import './admin.css'
import { Selectoption } from '../../components/Selectoption';
import '../../components/component.css'

import { DashboardLayout } from '../../layout/DashboardLayout/DashboardLayout';


export function AdminProfile(prop: {id?: string}){

    const [adminData, setAdminData] = useState({} as IAdmin | IAdminWithStack);
    const [outputMessage, setOutputMessage] = useState("");

    const params =  useParams();
        
    useEffect(()=> {
        let adminiD = params.id;
        //alert(adminiD + " the id")
        getAdminData(adminiD as string).then((res: any) => { 
            //alert(JSON.stringify(res))
            setAdminData({...res.data, ...{"stack": res.data.stack[0]} })
            //alert(JSON.stringify(adminData) + " admin")
        }).catch((err) => { alert(JSON.stringify(err) + " error")})
    }, [outputMessage])
    
    
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const name = e.target.name;
        const value = e.target.value;

        setAdminData((currData) => {return {...currData, [name]: value}});
    }

    function handleSubmit(){
        presentAlert("Save Update", 'please confirm', console.log, "confirm update").then(() => {
            const updateData: IAdminWithStack = {
                firstname: adminData.firstname,
                lastname: adminData.lastname,
                email: adminData.email,
                stack: adminData.stack as string,
                squad: adminData.squad as string
            }
            updateAdminData(updateData, adminData._id as string).then((res) => {
                //alert(JSON.stringify(res))
                //alert(JSON.stringify(updateData) + adminData._id)
                presentAlert("Update Done", 'please confirm', console.log, "Done").then(() => {})
                setOutputMessage("done updating info")
            })
    
        })
        
    }

    function toggleImagePicker(){
        try{
            let d = document.getElementById(`profile_img`);
            console.log(d?.id + 'is id');
            d?.click()
        }catch(e){
            console.log(JSON.stringify(e))
        }
    }

    function handleUpload(e: React.ChangeEvent<HTMLInputElement>){
        let file = e.target.files ? e.target.files[0] : null;
        if(file){
            const formData = new FormData()
            formData.append("file", file);
            formData.append("id", adminData._id as string);
            uploadAdminProfilePicture(formData).then((res) => {
                
                setOutputMessage("Done profile upload");
                presentAlert("done", "successfully uploaded", console.log, "done uploading").then(() => { })
            }).catch((err) => {
                
                presentAlert("Bad request", "successfully uploaded", console.log, "done uploading").then(() => {})
                //alert(JSON.stringify(err) + "the error")
            })
            return;
        }
        presentAlert("No file", "successfully uploaded", console.log, "done uploading").then(() => {})
        
        
    }

    

    return (
        <DashboardLayout>
             <div className='row page-header'>
                 {/* <div className='col-sm-4'></div> */}
                 <div className='col-sm-4'>
                    <div className='header'>
                    <h1>Profile</h1>
                    <div className='profile_img_div'>
                        {adminData.profile_img ? (
                            <div className='profile_img' aria-label='profile image, click to change'>
                                <img src={adminData.profile_img} className="profile_image" onClick={toggleImagePicker}/>
                            </div>
                        ): (
                            <div><i className='fa fa-image profile_image'onClick={toggleImagePicker} ></i> </div>
                        )}
                    </div>
                    <h4>{`${adminData.firstname}, ${adminData.lastname} `}</h4>
                    </div>
                                


                    <div className='form-group'>
                        <form>
                            <input type="file" name="profile_img" id="profile_img" onChange={handleUpload} />
                        </form>
                    </div>
                    <div className='form-group'>
                        <form>
                            <div className='form-group sinpleInput'>
                                <label htmlFor="firstname" className='simpleText'>Firstname </label>
                                <input type="text" className="form-control-lg simple" value={adminData.firstname} name="firstname" onChange={handleInputChange} />
                            </div>
                            
                            <div className='form-group simpleInput'>
                                <label htmlFor="lastname" className='simpleText'>Lastname </label>
                                <input type="text" className="form-control-lg simple" name="lastname" value={adminData.lastname} onChange={handleInputChange} />
                            </div>
                            
                            <div className='form-group simpleInput'>
                                <label htmlFor="email" className='simpleText'>Email </label>
                                <input type="email" className="form-control-lg simple" name="email" value={adminData.email} onChange={handleInputChange} />
                            </div>
                            
                            <div className='form-group simpleInput'>
                                <label htmlFor="stack" className='simpleInput'>Squad  </label>
                                <input type="email" className="form-control-lg simple" name="squad" value={adminData.squad} onChange={handleInputChange} />
                            </div>

                            <div>
                            <label className="control-text">Stacks</label>
                            <Selectoption
                                label="stack"
                                name="stack"
                                value={adminData.stack as string}
                                handleChange={handleInputChange}
                            />

                            </div>
                            <div className='form-group simpleInput'>
                                <button type="button" className=" submit-btn " onClick={handleSubmit}>save</button>
                            </div>
                        </form>
                    </div>
                 </div>
                 {/* <div className='col-sm-4'></div> */}
             </div>
        </DashboardLayout>
    )
}
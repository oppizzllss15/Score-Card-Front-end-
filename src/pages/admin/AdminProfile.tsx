import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { IAdmin } from '../../typings';
import { getAdminData, presentAlert, updateAdminData, uploadAdminProfilePicture } from '../../utils/adminApi';
import './admin.css'
export function AdminProfile(prop: {id: string}){

    const [adminData, setAdminData] = useState({} as IAdmin);
    const [outputMessage, setOutputMessage] = useState("");

    const params =  useParams();
        
    useEffect(()=> {
        let adminiD = params ? params.id : prop.id;
        //alert(adminiD + " the id")
        getAdminData(adminiD as string).then((res) => { 
            setAdminData(res.data)
        })
    }, [outputMessage])
    
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        const name = e.target.name;
        const value = e.target.value;

        setAdminData((currData) => {return {...currData, [name]: value}});
    }

    function handleSubmit(){
        presentAlert("Save Update", 'please confirm', console.log, "confirm update").then(() => {
            updateAdminData(adminData, adminData._id as string).then((res) => {
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
        //handle upload
        let file = e.target.files ? e.target.files[0] : null;
        if(file){
            const formData = new FormData()
            formData.append("profile_img", file);
            uploadAdminProfilePicture(adminData._id as string, formData).then((rss) => {
                presentAlert("done", "successfully uploaded", console.log, "done uploading").then(() => {
                    setOutputMessage("Done profile upload");
                })
            })
        }
        
    }

    return (
        <>
            <div className='header'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>

                </div>
                <div className='col-sm-4'></div>
            </div>
               
             <div className='row'>
                 <div className='col-sm-4'></div>
                 <div className='col-sm-4'>
                    <div className='header'>
                    <h1>Profile</h1>
                    <div className='profile_img_div'>
                        {adminData.profile_img ? (
                            <div className='profile_img' aria-label='profile image, click to change'>
                                <img src={adminData.profile_img} className="profile_image" onClick={toggleImagePicker}/>
                            </div>
                        ): (
                            <div><i className='fa fa-user profile_image'onClick={toggleImagePicker} ></i> </div>
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
                            <div className='form-group'>
                                <label htmlFor="firstname">Firstname </label>
                                <input type="text" className="form-control-lg" value={adminData.firstname} name="firstname" onChange={handleInputChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="lastname">Lastname </label>
                                <input type="text" className="form-control-lg" name="lastname" value={adminData.lastname} onChange={handleInputChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Email </label>
                                <input type="email" className="form-control-lg" name="email" value={adminData.email} onChange={handleInputChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="stack">Stack</label>
                                <input type="stack" className="form-control-lg" name="stack" value="SQ012" onChange={handleInputChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Squad </label>
                                <input type="email" className="form-control-lg" name="squad" value={ "SQ0"+adminData.squad} onChange={handleInputChange} />
                            </div>
                            <div className='form-group'>
                                <button type="button" className="btn btn-lg btn-primary submit-btn form-control-lg" onClick={handleSubmit}>save</button>
                            </div>
                        </form>
                    </div>
                 </div>
                 <div className='col-sm-4'></div>
             </div>
        </>
    )
}
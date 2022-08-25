import { IAdmin, IAdminWithStack, IStack } from "../typings";
import sweetAlert from 'sweetalert2';

const token = localStorage.getItem("token");
  
export function presentAlert(title: string = "", text: string = "", callback: Function = console.log, ...args: any){

        return sweetAlert.fire({
            title,
            text,
            icon: "success",
            confirmButtonText: "OK",
          }).then(function () {
            callback(...args)
          })
}

const url = process.env.REACT_APP_BACKEND_URI;

export interface ResponseDataType<T,U>{data: T, message?: U}

export function getAdmins(): Promise< ResponseDataType<IAdminWithStack[], unknown>> {
  return fetch(`${url}/superadmin//all/admin`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
  })
  .then((res: any) => {
     return res.json().then((data: ResponseDataType<IAdminWithStack[], unknown>) => { return data})
    })
  .catch((err) => {
    console.log(err)
    let result: ResponseDataType<IAdmin, unknown>
  })
}


export function updateAdminActivationStatus(status: string, adminId: string): Promise< ResponseDataType<IAdmin, unknown>> {
  return fetch(`${url}/superadmin/admin/status/${status}/${adminId}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    
    },
  })
  .then((res: any) => {
     return res.json().then((data: ResponseDataType<IAdmin, unknown>) => { console.log(JSON.stringify(data)); return data})
    })
  .catch((err) => {
    console.log(err)
    let result: ResponseDataType<IAdmin, unknown>
  })
}

export function updateAdminData(data: IAdmin | IAdminWithStack, adminId: string): Promise< ResponseDataType<IAdmin, unknown>> {
  return fetch(`${url}/superadmin/admin/update/${adminId}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then((res: any) => {
     return res.json().then((data: ResponseDataType<IAdmin, unknown>) => { console.log(JSON.stringify(data)); return data})
    })
  .catch((err) => {
    console.log(err)
    let result: ResponseDataType<IAdmin, unknown>
  })
}


export function deleteAdminData(adminId: string): Promise< ResponseDataType<boolean, string>> {
  return fetch(`${url}/superadmin/admin/update/${adminId}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
  })
  .then((res: any) => {
     return res.json().then((data: ResponseDataType<boolean, string>) => { console.log(JSON.stringify(data)); return data})
    })
  .catch((err) => {
    console.log(err)
    let result: ResponseDataType<boolean, string>
  })
}

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
  console.log("got here")
  return fetch(`${url}/superadmin/all/admin`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
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

// export const getAdmins = async () => {
//   let token = localStorage.getItem("token");
//   try {
//     const resp = await fetch(`${url}/superadmin/all/admin`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const res = await resp.json();

//     alert(JSON.stringify(res))
//     return {data: res.Admis};
//   } catch (err) {
//     console.log(err);
//   }
// };



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
  return fetch(`${url}/superadmin/admin/delete/${adminId}`, {
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

export function getAdminData(adminId: string): Promise< ResponseDataType<IAdmin, string>> {
   //alert(`${url}/admin/me/:${adminId.replace(":", "")}`);
  return fetch(`${url}/admin/profile/${adminId}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
    },
    
  })
  .then((res: any) => {
     return res.json().then((data: ResponseDataType<IAdmin, string>) => { console.log(JSON.stringify(data) + " got not"); return data})
    })
  .catch((err) => {
    console.log(JSON.stringify(err) + " ERROR ")
    let result: ResponseDataType<boolean, string>
  })
}


export const uploadAdminProfilePicture = async (adminId: string, imgFormData: FormData) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/admin/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(imgFormData),
    
    });
    
    //const res = await resp.json();
    alert(JSON.stringify(resp) + " response")
    return resp.json();

  } catch (err) {
    alert(JSON.stringify(err) + "error in the fetch ")
    console.log(err);
  }
};
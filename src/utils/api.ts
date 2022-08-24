const url = process.env.REACT_APP_BACKEND_URI;

export const sendResetLink = async (email: string) => {
   try {
      const resp = await fetch(`${url}/users/forgot/password`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify({ email }),
      });
      const res = await resp.json();
      return res;
   } catch (error) {
      console.log(error);
   }
};

export const resetAccountPassword = async (
   id: string,
   ticket: string,
   newPassword: string,
   confirmPassword: string
) => {
   try {
      const resp = await fetch(`${url}/users/reset/password/${id}/${ticket}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify({ newPassword, confirmPassword }),
      });
      const res = await resp.json();
      return res;
   } catch (error) {
      console.log(error);
   }
};

export const changeUserPassword = async (
   newPassword: string,
   confirmPassword: string
) => {
   let token = localStorage.getItem("token");
   try {
      const resp = await fetch(`${url}/update/password`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({ newPassword, confirmPassword }),
      });
      return resp.json();
   } catch (err) {
      console.log(err);
   }
};

export const loginUser = async (email: string, password: string) => {
   // let token = localStorage.getItem('token')
   try {
      const resp = await fetch(`${url}/users/login`, {
         method: "POST",
         headers: {
            "Content-type": "application/json",
            // authorization: token
         },
         body: JSON.stringify({ email, password }),
      });
      return resp.json();
   } catch (err) {
      console.log(err);
   }
};

export const signUp = async (
   firstname: string,
   lastname: string,
   email: string,
   stack: string,
   squad: string,
   phone: string,
   password: string,
   confirmPassword: string
) => {
   // let token = localStorage.getItem('token')
   try {
      const resp = await fetch(`${url}/superadmin/create`, {
         method: "POST",
         headers: {
            "Content-type": "application/json",
            // authorization: token
         },
         body: JSON.stringify({
            firstname,
            lastname,
            email,
            stack,
            squad,
            phone,
            password,
            confirmPassword,
         }),
      });
      return resp.json();
   } catch (err) {
      console.log(err);
   }
};

export const getallStack = async () => {
   //let token = localStorage.getItem("token");
   try {
      const resp = await fetch(`${url}/superadmin/stacks`, {
         method: "GET",
         headers: {
            "Content-type": "application/json",
            // Authorization: `Bearer ${token}`,
         },
      });
      return resp.json();
   } catch (error) {
      console.log(error);
      return error.json();
   }
};


export const createUser = async (
   firstname: string,
   lastname: string,
   email: string,
   squad: string,
   stack: string
) => {
   // let token = localStorage.getItem("token");
   try {
      const resp = await fetch(`${url}/superadmin/user/create`, {
         method: "POST",
         headers: {
            "Content-type": "application/json",
            // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          squad,
          stack,
        })
      });
      return resp.json();
   } catch (error) {
     console.log(error);
     
   }
};
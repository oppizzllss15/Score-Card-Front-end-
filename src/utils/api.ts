const url = process.env.REACT_APP_BACKEND_URI;

export const changeUserPassword = async (newPassword: string, confirmPassword: string) => {
    let token = localStorage.getItem('token')
   try {
      const resp = await fetch(`${url}/update/password`, {
         method: "POST",
          headers: {
              "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
          },
         body: JSON.stringify({ newPassword, confirmPassword }),
      });
      return resp.json();
   } catch (err) {
      console.log(err);
   }
};

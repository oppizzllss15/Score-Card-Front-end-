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

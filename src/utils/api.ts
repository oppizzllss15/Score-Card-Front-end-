const url = process.env.REACT_APP_BACKEND_URI;

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

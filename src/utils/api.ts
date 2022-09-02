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
  try {
    const resp = await fetch(`${url}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return resp.json();
  } catch (err: any) {
    return err.json();
  }
};

export const devManagement = async () => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/all/devs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

export const activateDevAccount = async (id: string) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/user/activate/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

export const deactivateDevAccount = async (id: string) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/user/deactivate/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

export const deleteDevAccount = async (id: string) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

export const updateDevAccount = async (
  id: string,
  firstname: string,
  lastname: string,
  squad: string,
  stack: string
) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/user/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstname, lastname, stack, squad }),
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

export const getAllStack = async () => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/stacks`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.json();
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (
  firstname: string,
  lastname: string,
  email: string,
  squad: number,
  stack: string
) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/user/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        squad,
        stack,
      }),
    });
    return resp.json();
  } catch (error) {
    console.log(error);
  }
};

export const filterDevsPerformanceByWeek = async (id: string | number) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/user/getscores/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await resp.json();
  } catch (err) {
    return [];
  }
};

export const createNewStack = async (name: string, image: string) => {
  let token = localStorage.getItem("token");
  let data = {
    name,
    image,
  };
  try {
    const resp = await fetch(`${url}/superadmin/createstack`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return resp.json();
  } catch (error) {
    console.log(error);
  }
};

export const createNewAdmin = async (
  firstname: string,
  lastname: string,
  email: string,
  squad: number,
  stack: string,
  role: string
) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/admin/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        squad,
        stack,
        role,
      }),
    });
    return resp.json();
  } catch (error) {
    console.log(error);
  }
};

export const createNewUser = async (
  firstname: string,
  lastname: string,
  email: string,
  squad: string,
  stack: string
) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/superadmin/user/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        squad,
        stack,
      }),
    });
    return resp.json();
  } catch (error) {
    console.log(error);
  }
};

export const getUserScores = async (id: string) => {
  let token = localStorage.getItem("token");
  try {
    const resp = await fetch(`${url}/users/performance/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

export const getScores = async () => {
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("Id");
  try {
    const resp = await fetch(`${url}/users/getscores/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await resp.json();
  } catch (err) {
    return [];
  }
};

export const getPercentChange = async () => {
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("Id");
  try {
    const resp = await fetch(`${url}/users/score/tracker/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return await resp.json();
  } catch (err) {
    return [];
  }
};

export const logoutUser = async () => {
  try {
    const resp = await fetch(`${url}/users/logout`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: ``,
      },
    });
    return await resp.json();
  } catch (err) {
    return "";
  }
};


export const addEditScore = async (
  type: string,
  id: string,
  week: number,
  agile: number,
  algorithm: number,
  assessment: number,
  weekly_task: number
) => {
  let address = null
  let token = localStorage.getItem("token");
  const endpoint1 = `${url}/superadmin/user/calculate/score/${id}`
  const endpoint2 = `${url}/superadmin/user/editscoreweek/${id}`
  
  if (type === "add") {
    address = endpoint1
  } else if (type === "edit") {
    address = endpoint2
  }
  try {
    const resp = await fetch(`${address}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        week,
        agile,
        algorithm,
        assessment,
        weekly_task,
      }),
    });
    return resp.json();
  } catch (error) {
    console.log(error);
  }
};
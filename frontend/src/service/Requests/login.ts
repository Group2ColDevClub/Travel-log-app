interface LoginResponse {
  token: string;
  refreshToken: string;
  msg: string;
  status?: number;
}

export const login = async (data: any) => {
  let resData: LoginResponse;
  try {
    const url = 'http://localhost:8080/login';
    const requestInit = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, requestInit);
    resData = await res.json();
    resData.status = res.status;

    if (resData.token) localStorage.setItem('token', resData.token);
    if (resData.refreshToken) localStorage.setItem('refreshToken', resData.refreshToken);
  } catch (err) {
    localStorage.removeItem('token');
    // TODO: signout
    resData.msg = err.message;
  }
  return resData;
};

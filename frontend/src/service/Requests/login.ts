export const login = async (data: any) => {
  let resData = null;
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
    const { token, msg, ...rest } = await res.json();
    resData = { status: res.status, msg: msg, ...rest };
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  } catch (error) {
    resData = { ...resData, msg: error.message, error: error };
  }
  return resData;
};

interface LogoutResponse {
  msg?: string;
  loggedOut: boolean;
}

export const logout = async (): Promise<LogoutResponse> => {
  const data: LogoutResponse = { loggedOut: false };
  try {
    const url = 'http://localhost:8080/logout';
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw Error('No refresh token');
    const requestInit = {
      method: 'POST',
      body: JSON.stringify({ token: refreshToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, requestInit);
    const { loggedOut, msg }: LogoutResponse = await res.json();
    data.loggedOut = loggedOut;
    data.msg = msg;
    if (!loggedOut) throw Error('Failed to logout');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('token');
  } catch (err) {
    data.msg = err.message;
  }
  return data;
};

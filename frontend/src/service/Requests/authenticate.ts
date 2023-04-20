interface AuthenticateRes {
  authorized: boolean;
  msg?: string;
}

interface NewTokenResponse {
  token?: string;
  msg?: string;
}

export const authenticate = async (): Promise<AuthenticateRes> => {
  try {
    const url = 'http://localhost:8080/authenticate';
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Login required');
    const requestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(url, requestInit);
    const { authorized, msg } = await res.json();
    return { authorized, msg };
  } catch (err) {
    return {
      authorized: false,
      msg: err.message,
    };
  }
};

export const getNewToken = async (): Promise<NewTokenResponse> => {
  try {
    const url = 'http://localhost:8080/authenticate/token';
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token');
    const requestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: refreshToken }),
    };
    const res = await fetch(url, requestInit);
    const { token, msg }: NewTokenResponse = await res.json();
    if (!token) throw new Error(`No new token: ${msg}`);
    localStorage.setItem('token', token);
    return { token, msg };
  } catch (err) {
    return { msg: err.message };
  }
};

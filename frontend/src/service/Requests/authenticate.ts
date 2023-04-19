interface AuthenticateRes {
  authorized: boolean;
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
    const { authorized } = await res.json();
    return { authorized };
  } catch (err) {
    return {
      authorized: false,
      msg: err.message,
    };
  }
};

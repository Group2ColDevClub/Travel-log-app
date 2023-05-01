import { toast } from 'react-toastify';

export const signup = async (data: { [key: string]: any }) => {
  try {
    const url = 'http://localhost:8080/signup';
    const requestInit = {
      method: 'POST',
      body: JSON.stringify({ ...data }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, requestInit);
    const { msg } = await res.json();
    if (res.status !== 201) throw new Error(`Creation failed: ${msg}`);
    return true;
  } catch (err) {
    toast.error(err.message);
    return false;
  }
};

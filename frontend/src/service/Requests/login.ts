export const login = async (data: any) => {
  console.log('here');
  const url = 'http://localhost:8080/login';
  const requestInit = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await fetch(url, requestInit);
  const resData = await res.json();
  const resToken = res.headers.get('Set-Cookie');
  console.log(resData, resToken);
};

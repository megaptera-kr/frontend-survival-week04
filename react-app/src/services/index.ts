const BASE_URL = 'http://localhost:3000/';

export const HTTP_METHOD = {
  GET() {
    return {
      method: 'GET',
    };
  },
  POST(data: any) {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  },
  PUT(data: any) {
    return {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : null,
    };
  },
  DELETE() {
    return { method: 'DELETE' };
  },
};

const request = async (url: string, option: any) => {
  await fetch(url, option)
    .then((response) => response.json())
    .catch((e) => console.log(e));
};

export default request;

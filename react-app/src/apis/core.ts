const get = async <T = UnknownObject, K = UnknownObject>(url: string, params?: T) => {
  const apiUrl = params ? `${url}?${params}` : url;
  const res = await fetch(apiUrl, { method: 'GET' });

  return res.json() as K;
};
const post = async <T = UnknownObject, K = UnknownObject>(url: string, body: T) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body) as BodyInit,
  });

  return res.json() as K;
};

const http = {
  get,
  post,
};

export default http;

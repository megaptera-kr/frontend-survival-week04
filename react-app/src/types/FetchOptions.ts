type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  mode : 'cors' | 'no-cors' | 'cors' |'same-origin';
  headers?: {
    'Content-Type': 'application/json'| 'application/x-www-form-urlencoded'
  };
  body?: string;
}

export default FetchOptions;

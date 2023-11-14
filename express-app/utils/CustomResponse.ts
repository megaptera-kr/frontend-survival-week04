import { StatusCodeType } from '../../common';

class CustomResponse<T> {
  message: string;

  data: T;

  status: StatusCodeType;

  constructor(status: StatusCodeType, message: string, data: T) {
    this.message = message;
    this.data = data;
    this.status = status;
  }
}

export default CustomResponse;

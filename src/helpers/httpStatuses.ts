enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER = 500,
}

interface IHttpStatus {
  Code: HttpStatusCode;
  Name: string;
}

interface IHttpStatusRoot {
  Ok: IHttpStatus;
  BadRequest: IHttpStatus;
  NotFound: IHttpStatus;
  InternalServerError: IHttpStatus;
  TooManyRequests: IHttpStatus;
}

export const HttpStatues: IHttpStatusRoot = {
  Ok: {
    Code: HttpStatusCode.OK,
    Name: 'OK',
  },
  BadRequest: {
    Code: HttpStatusCode.BAD_REQUEST,
    Name: 'Bad Request',
  },
  NotFound: {
    Code: HttpStatusCode.NOT_FOUND,
    Name: 'Not Found',
  },
  InternalServerError: {
    Code: HttpStatusCode.INTERNAL_SERVER,
    Name: 'Internal Server Error',
  },
  TooManyRequests: {
    Code: HttpStatusCode.TOO_MANY_REQUESTS,
    Name: 'Too Many Requests'
  }
};

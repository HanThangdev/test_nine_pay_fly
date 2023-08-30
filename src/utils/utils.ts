import { AxiosError, isAxiosError, HttpStatusCode } from 'axios';

export function isAxiosUnauthorizedError<UnauthorizedError>(
  error: unknown,
): error is AxiosError<UnauthorizedError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.Unauthorized
  );
}
export function isAxiosInternalServerError<InternalServerError>(
  error: unknown,
): error is AxiosError<InternalServerError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.InternalServerError
  );
}

export function isEmptyObjectOrArray(data: any) {
  if(!data){
    return true
  }
  return !((Array.isArray(data) && data.length > 0) || (typeof data === 'object' && Object.keys(data).length > 0));
}
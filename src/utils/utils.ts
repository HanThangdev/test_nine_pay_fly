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

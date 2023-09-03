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
  if (!data) {
    return true;
  }
  return !(
    (Array.isArray(data) && data.length > 0) ||
    (typeof data === 'object' && Object.keys(data).length > 0)
  );
}

export function convertArrayMessage(message: any) {
  const resultArray = [];

  for (let i = 1; i <= message.length; i++) {
    const subString = message.slice(0, i);
    resultArray.push(subString);
    resultArray.push(10);
  }

  return resultArray;
}

export default function convertFile2Base64(file: File) {
  return new Promise<string | undefined>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString());
    reader.onerror = reject;
  });
}

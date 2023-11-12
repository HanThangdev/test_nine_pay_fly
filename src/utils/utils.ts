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

export function convertFile2Base64(file: File) {
  return new Promise<string | undefined>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString());
    reader.onerror = reject;
  });
}

export function objectToQueryString(obj: { [key: string]: any }): string {
  const queryString = Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
  return queryString;
}

export function getSearchParamsObject(queryString: string) {
  const urlParams = new URLSearchParams(queryString);
  
  const paramsObject: any = {};
  for (const [key, value] of urlParams.entries()) {
    paramsObject[key] = value;
  }

  return paramsObject;
}

export function convertCustomValue(obj: any): Array<{ key: string }> {
  if (isEmptyObjectOrArray(obj)) {
    return [];
  }
  const newArray = Object.keys(obj)
    .filter((key) => key !== 'name' && key !== 'phone' && key !== 'email' && key !== 'numberShowing')
    .map((key) => ({ key: key }));
  return newArray;
}

export function hasDuplicateFiles(file: File, listFiles: File[]): boolean {
  return listFiles.some((existingFile) => existingFile.name === file.name); // No duplicates found
}

export function downloadPDFFromString(blob: Blob, fileName: string) {
  // Create a URL for the Blob
  const blobUrl = URL.createObjectURL(blob);

  // Create a download link
  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = fileName;

  // Trigger a click event on the link to initiate the download
  document.body.appendChild(a);
  a.click();

  // Clean up
  URL.revokeObjectURL(blobUrl);
  document.body.removeChild(a);
}

export function removeDuplicates<T>(arr: T[]): T[] {
  const uniqueValues: Record<string, boolean> = {};
  const result: T[] = [];

  for (const item of arr) {
    if (!uniqueValues[item as any]) {
      uniqueValues[item as any] = true;
      result.push(item);
    }
  }

  return result;
}

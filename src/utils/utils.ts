export function getShortItemName(fullName: string): string {
  const nameArr = fullName.toUpperCase().split(' ');

  if (nameArr.includes('MARK')) {
    return nameArr.slice(0, 3).join(' ');
  } else {
    return nameArr[0];
  }
}

export function getDataFromLocalStorage(key: string) {
  const localStorageItem = localStorage.getItem(key);
  return localStorageItem ? JSON.parse(localStorageItem) : null;
}

export function saveDataToLocalStorage<T>(key: string, payload: T) {
  const stringifiedPayload = JSON.stringify(payload);
  return localStorage.setItem(key, stringifiedPayload);
}

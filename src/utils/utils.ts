export function getShortItemName(fullName: string): string {
  const nameArr = fullName.toUpperCase().split(' ');

  if (nameArr.includes('MARK')) {
    return nameArr.slice(0, 3).join(' ');
  } else {
    return nameArr[0];
  }
}

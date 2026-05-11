import data from './data.json';

export function getData() {
  return new Promise((resolve) => resolve(data));
}

export function loader() {
  return getData();
}
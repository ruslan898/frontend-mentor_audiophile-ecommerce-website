import data from './data.json';
import type { ImagePaths } from './types/types';

export function getData() {
  return new Promise((resolve) => resolve(data));
}

export function loader() {
  return getData();
}

export function getImgPathsObj(
  urlMobile: string,
  urlTablet: string,
  urlDesktop: string,
): ImagePaths {
  return {
    mobile: urlMobile,
    tablet: urlTablet,
    desktop: urlDesktop
  };
}

import { useWindowWidth } from './useWindowWidth';
import type { ImagePaths } from '../types/types';

export function useImageByScreenSize(imgObj: ImagePaths) {
  const windowWidth = useWindowWidth();
  const { mobile, tablet, desktop } = imgObj;

  return windowWidth < 768 ? mobile : windowWidth < 1024 ? tablet : desktop;
}

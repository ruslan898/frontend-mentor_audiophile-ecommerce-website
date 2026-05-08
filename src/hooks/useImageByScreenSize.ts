import { useWindowWidth } from './useWindowWidth';

type imgObj = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export function useImageByScreenSize(imgObj: imgObj) {
  const windowWidth = useWindowWidth();
  const { mobile, tablet, desktop } = imgObj;

  return windowWidth < 768 ? mobile : windowWidth < 1024 ? tablet : desktop;
}

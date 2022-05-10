import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { MEDIA_BREAKPOINTS } from '../utils/constants';

const mobileBreakpoint = MEDIA_BREAKPOINTS.small;
const tabletBreakpoint = MEDIA_BREAKPOINTS.medium;

//Hook to detect current screen size
const useResponsive = () => {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState<boolean>(
    windowWidth < mobileBreakpoint
  );
  const [isTablet, setIsTablet] = useState<boolean>(
    windowWidth < tabletBreakpoint
  );
  const isDesktop: boolean = !isTablet && !isMobile;

  useEffect(() => {
    setIsMobile(windowWidth < mobileBreakpoint);
    setIsTablet(windowWidth < tabletBreakpoint);
  }, [isMobile, isTablet, windowWidth]);

  return { isMobile, isTablet, isDesktop };
};

export default useResponsive;

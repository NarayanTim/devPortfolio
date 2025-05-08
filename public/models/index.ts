

export const calculateSizes = ({ isSmall, isMobile, isTablet }: { isSmall: boolean; isMobile: boolean; isTablet: boolean }) : {[key: string]: [number, number, number]} => {
  return {
    unity: isSmall ? [0, 8, 0] : isMobile ? [0, 10, 0] : isTablet ? [0, 10, 0] : [0, 5, 0],

    react: isSmall ? [0, -10, 0] : isMobile ? [0, 5, 0] : isTablet ? [-10, 12, -8] : [-15, 10, 0],

    python: isSmall ? [5, -10, 0] : isMobile ? [10, 10, 0] : isTablet ? [12, 12, 0] : [10, 7, 0],

    node: isSmall ? [-5, -10, 0] : isMobile ? [-10, -8, 0] : isTablet ? [-12, -12, 0] : [-15, -10, 0],

    next: isSmall ? [-6, 5, 0] : isMobile ? [0, 5, 0] : isTablet ? [10, 10, 0] : [-5, -10, -5],
  };
};
import { useBreakpoint } from 'vue-composable';

export function useBreakpoints() {
  return useBreakpoint({
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440
  });
}

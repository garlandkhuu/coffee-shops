// Screen Sizes
export const LARGE = 1260;
export const MEDIUM = 1060;
export const SMALL = 700;

export const MEDIA_BREAKPOINTS = {
  small: SMALL,
  medium: MEDIUM,
  large: LARGE,
};

export const MEDIA_QUERIES = {
  small: `@media only screen and (max-width: ${MEDIA_BREAKPOINTS.small}px)`,
  medium: `@media only screen and (max-width: ${MEDIA_BREAKPOINTS.medium}px)`,
  large: `@media only screen and (min-width: ${MEDIA_BREAKPOINTS.medium}px)`,
};

export const GOOGLE_MAPS_BASE =
  'https://www.google.com/maps/search/?api=1&query=';

export const getCurrentLocale = (
  pathname: string,
  locales: string[],
  defaultLocale: string
): string => {
  const segments = pathname.split("/");
  const potentialLocale = segments[1];
  if (locales.includes(potentialLocale)) {
    return potentialLocale;
  }
  return defaultLocale;
};

export const changeLocalePath = (
  pathname: string,
  newLocale: string,
  locales: string[],
  defaultLocale: string
): string => {
  const segments = pathname.split("/");
  if (locales.includes(segments[1])) {
    segments[1] = newLocale;
  } else {
    segments.splice(1, 0, newLocale);
  }
  return segments.join("/");
};

export function convertToValidPathname(name: string) {
  return name.toLocaleLowerCase().replace(/[\s#\/]/g, "-");
}

export const camelToSnake = (str: string): string =>
  str
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '_' + m[1];
    })
    .toLowerCase();

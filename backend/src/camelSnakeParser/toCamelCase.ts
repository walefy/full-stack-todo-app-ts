const convertArrayString = (data: Array<string>) => {
  for (let index = 1; index < data.length; index += 1) {
    data[index] = data[index].charAt(0).toUpperCase() + data[index].slice(1);
  }
  return data.map((item) => item.trim()).join('');
};

const parser = (data: string) => {
  const splittedDataSnakeCase = data.split('_');
  const splittedDataSpace = data.split(' ').filter((item) => item !== '');
  const splittedDataBabelCase = data.split('-');

  if (splittedDataSpace.length >= 2) {
    return convertArrayString(splittedDataSpace);
  }

  if (splittedDataSnakeCase.length >= 2) {
    return convertArrayString(splittedDataSnakeCase);
  }

  if (splittedDataBabelCase.length >= 2) {
    return convertArrayString(splittedDataBabelCase);
  }

  return data.trim();
};

export const toCamelCase = (data: string | Array<string>) => {
  if (typeof data === 'string') {
    return parser(data);
  }

  if (Array.isArray(data)) {
    const result = data.map((item) => parser(item));
    return result;
  }

  throw new Error('Invalid data type! Please provide a string or an array of string.');
};

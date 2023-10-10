const parser = (data: string) => {
  const splittedItemCamelCase = data.split(/(?<=[a-z])(?=[A-Z])/g);
  const splittedItemSpace = data.split(' ').filter((item) => item !== '');
  const splittedItemBabelCase = data.split('-');

  if (splittedItemCamelCase.length >= 2) {
    const splittedItem = splittedItemCamelCase
      .map((item) => item.trim())
      .join('_')
      .toLowerCase();

    return splittedItem;
  }

  if (splittedItemSpace.length >= 2) {
    const splittedItem = splittedItemSpace.join('_').toLowerCase();

    return splittedItem;
  }

  if (splittedItemBabelCase.length >= 2) {
    const splittedItem = splittedItemBabelCase
      .map((item) => item.trim())
      .join('_')
      .toLowerCase();
    
      return splittedItem;
  }

  return data.trim().toLowerCase();
};

export const toSnakeCase = (data: string | Array<string>) => {
  if (typeof data === 'string') {
    return parser(data);
  }

  if (Array.isArray(data)) {
    const result = data.map((item) => parser(item));
    return result;
  }

  throw new Error('Invalid data type! Please provide a string or an array of string.');
};

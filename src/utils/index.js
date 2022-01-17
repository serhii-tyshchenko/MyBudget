export * from './getClassName';
export * from './getId';
export * from './isEmpty';

export const getKeyByValue = (object, value) =>
  Object.keys(object).find((key) => object[key] === value);

export const getValueByKey = (object, key) => object[key];

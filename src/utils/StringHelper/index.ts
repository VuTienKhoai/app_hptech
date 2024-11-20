import queryString from 'query-string';

/**
 * @description Convert object thành query trên url
 */
export const stringifyQuery = (object: object) => {
  return queryString.stringify(object, {
    skipEmptyString: true,
    skipNull: true,
  });
};

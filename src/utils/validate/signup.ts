export const isValidAge = new RegExp(/^[0-9]{1,3}$/);
export const isValidId = new RegExp(
  /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
);
export const isValidName = new RegExp(/^[가-힣a-zA-Z]+$/);
export const checkZeroOfFront = new RegExp(/(^0+)/);

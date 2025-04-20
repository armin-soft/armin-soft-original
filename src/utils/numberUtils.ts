
// Convert English numbers to Persian numbers
export const toPersianNumbers = (num: number | string): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, x => persianDigits[parseInt(x)]);
};

// Convert number to Persian with comma separators
export const toPersianNumbersWithComma = (num: number | string): string => {
  const convertedToFarsi = toPersianNumbers(num);
  const withCommas = convertedToFarsi.replace(/\B(?=(\d{3})+(?!\d))/g, '،');
  return withCommas;
};

// Format a date string to Persian numbers
export const toPersianDate = (dateStr: string): string => {
  return dateStr.replace(/\d/g, d => toPersianNumbers(d));
};


import { useMemo } from 'react';
import { toPersianNumbers, toPersianNumbersWithComma } from '@/utils/numberUtils';

export function usePersianNumbers(value: number | string) {
  return useMemo(() => {
    // If the number has decimal points or needs commas
    if (typeof value === 'number' && !Number.isInteger(value)) {
      return toPersianNumbersWithComma(value.toFixed(2));
    }
    
    // Regular conversion
    return toPersianNumbers(value);
  }, [value]);
}

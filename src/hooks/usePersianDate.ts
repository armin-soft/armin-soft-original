
import { useMemo } from 'react';
import { toPersianDate } from '@/utils/numberUtils';

export function usePersianDate(date: string) {
  return useMemo(() => {
    return toPersianDate(date);
  }, [date]);
}

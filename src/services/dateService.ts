
import axios from 'axios';

interface ShamsiDateResponse {
  date: string;
  dayName: string;
}

export async function getShamsiDate(): Promise<ShamsiDateResponse> {
  try {
    const response = await axios.get('https://api.keybit.ir/time/');
    return {
      date: response.data.date.full.official.fa,
      dayName: response.data.date.weekday.name
    };
  } catch (error) {
    console.error('Error fetching Shamsi date:', error);
    return {
      date: '',
      dayName: ''
    };
  }
}

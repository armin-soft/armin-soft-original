
import axios from 'axios';

interface DateTimeResponse {
  Result: {
    Code: number;
    Shamsi_Date: string;
    Season: string;
    Season_Emoji: string;
    Time_Based: string;
    Time_Based_Emoji: string;
  }
}

export async function getShamsiDate(): Promise<DateTimeResponse['Result']> {
  try {
    const response = await axios.get('https://api.armin-soft.ir/Date-Time/', {
      params: {
        License: 'd5LAyJxbYst0egh2qNCdc6kWq0gdckmj',
        Next: 0,
        Mounth: 0
      }
    });
    return response.data.Result;
  } catch (error) {
    console.error('Error fetching Shamsi date:', error);
    return {
      Code: 500,
      Shamsi_Date: '',
      Season: '',
      Season_Emoji: '',
      Time_Based: '',
      Time_Based_Emoji: ''
    };
  }
}

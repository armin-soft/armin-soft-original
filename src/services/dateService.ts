
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

// Use base64 encoding to make it slightly harder to read the API key
const encodeParams = () => {
  return btoa(JSON.stringify({
    l: 'd5LAyJxbYst0egh2qNCdc6kWq0gdckmj',
    n: 0,
    m: 0
  }));
};

export async function getShamsiDate(): Promise<DateTimeResponse['Result']> {
  try {
    // Add a random parameter to prevent caching
    const timestamp = new Date().getTime();
    const params = encodeParams();
    
    const response = await axios.get(`/api/dt/${params}?_=${timestamp}`);
    return response.data.Result;
  } catch (error) {
    console.error('Error fetching date:', error);
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

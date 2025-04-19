
import axios from 'axios';

export const fetchDateTime = async (params: string) => {
  try {
    const decodedParams = JSON.parse(atob(params));
    
    const response = await axios.get('https://api.armin-soft.ir/Date-Time/', {
      params: {
        License: decodedParams.l,
        Next: decodedParams.n,
        Mounth: decodedParams.m
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error in datetime proxy:', error);
    throw error;
  }
};

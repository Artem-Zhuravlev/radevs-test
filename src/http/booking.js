import { axiosInstance } from '@/config';

export const getBookingList = async () => {
  const { data } = await axiosInstance.get('/booking');

  return data;
};

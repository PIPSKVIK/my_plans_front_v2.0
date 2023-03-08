import { http } from './http';
import { ENDPOINTS } from '@/constants/endpoints';
import { AxiosResponse } from 'axios';
import { TShift } from '@/types/shift_types';

export const http_get_shift_by_month = async (month: string) => {
    return await http.get<TShift[]>(`${ENDPOINTS.shifts.shifts_by_month}${month}`);
};

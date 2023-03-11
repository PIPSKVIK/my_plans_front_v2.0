import { defineStore } from 'pinia';
import { http_get_shift_by_month } from '@/services/shift.service';
import { TShift } from '@/types/shift_types';

export type ShiftRootState = {
    shifts: TShift[];
};

export const useShift = defineStore({
    id: 'shift',
    state: () => ({} as ShiftRootState),
    actions: {
        async fetchShiftByMonth(month: string) {
            try {
                const { data } = await http_get_shift_by_month(month);
                if (data.length) {
                    this.$state.shifts = data;
                }
            } catch (e) {
                console.log(e);
            }
        },
    },
});

<template>
    <div class="calendar-page">
        <AppCalendar
            :month="state.selectedMonth"
            :shifts="shifts"
            @selectDate="(date) => (selectShiftDate = date)"
        />
    </div>
</template>

<script setup lang="ts">
import './calendar-page.scss';
import { AppCalendar } from '@/components/Organisms';
import { TShiftCreate } from '@/types';
import { computed, reactive, ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useShift } from '@/store';
import moment from 'moment';

const store_shift = useShift();
const { shifts } = storeToRefs(useShift());
const state = reactive({
    selectedMonth: '',
});
const selectShiftDate = ref('');
const selectedMonthYearName = computed(() => {
    return {
        month: moment(state.selectedMonth, 'MM YYYY').format('MMMM'),
        year: moment(state.selectedMonth, 'MM YYYY').format('YYYY'),
    };
});

const getShifts = async () => {
    const month = moment().month(selectedMonthYearName.value.month).format('M');
    await store_shift.fetchShiftByMonth(month);
};
const initCalendar = async () => {
    state.selectedMonth = moment().format('MM YYYY');
    await getShifts();
};

onMounted(() => {
    initCalendar();
});
</script>

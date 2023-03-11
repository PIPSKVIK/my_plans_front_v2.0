<template>
    <div class="calendar-page">
        <div class="calendar-page__header">
            <div class="calendar-page__header-left">Any filters</div>
            <div class="calendar-page__header-right">
                <v-btn-toggle divided variant="outlined" density="comfortable">
                    <v-btn icon="mdi-chevron-left" @click="changeMonth('subtract', 1)" />
                    <v-btn icon="mdi-chevron-right" @click="changeMonth('add', 1)" />
                </v-btn-toggle>
            </div>
        </div>
        <div class="calendar-page__main">
            <AppCalendar
                :month="state.selectedMonth"
                :shifts="shifts"
                @selectDate="(date) => (selectShiftDate = date)"
            />
            <div class="calendar-page__create-block">Create shifts elements</div>
        </div>

        <AppLoader :loading="isLoading" full />
    </div>
</template>

<script setup lang="ts">
import './calendar-page.scss';

import { AppLoader } from '@/components/Atoms';
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
const isLoading = ref(false);
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

const changeMonth = async (action: string, count: number) => {
    state.selectedMonth =
        action === 'add'
            ? moment(state.selectedMonth, 'MM YYYY').add(1, 'M').format('MM YYYY')
            : moment(state.selectedMonth, 'MM YYYY').subtract(count, 'M').format('MM YYYY');

    isLoading.value = true;
    setTimeout(async () => {
        await getShifts();
        isLoading.value = false;
    }, 1000);
};

onMounted(() => {
    initCalendar();
});
</script>

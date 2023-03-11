<template>
    <div class="calendar">
        <div class="calendar__grid">
            <div v-for="(row, r) in calendar" :key="row.week" class="calendar__row">
                <div
                    v-for="(day, i) in row.days"
                    :key="`${row.week}-${i}`"
                    class="calendar__cell"
                    :class="{
                        'calendar__cell--last-row': r === calendar.length - 1,
                        'calendar__cell--first-row': r === 0,
                        'calendar__cell--first': i === 0,
                        'calendar__cell--last': i === row.days.length - 1,
                        'calendar__cell--current': day.isCurrentDate,
                        'calendar__cell--selected': selectedDate && selectedDate === day.full,
                    }"
                    @click="selectDate(day.full)"
                >
                    <template v-if="day">
                        <div v-if="r === 0" class="weakday">
                            {{ day.dayOfWeek }}
                        </div>
                        <div v-if="day.num" class="num">{{ day.num }}</div>
                        <div class="calendar__cell__shifts">
                            <!-- <AppCalendarCard
                                v-for="(shift, i) in day.shifts"
                                :key="`${shift.shift_id}-${i}`"
                                :shift="shift"
                                @selectCard="(card_id) => emit('selectCard', card_id)"
                            /> -->
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import './app-calendar.scss';
// import { AppCalendarCard } from '@/components/Molecules';
import moment from 'moment';
import { computed, ref } from 'vue';
import { DayType, dayOfWeekType } from '@/types';

const emit = defineEmits<{
    (e: 'selectDate', event: string): void;
    (e: 'selectCard', event: number): void;
}>();
const props = defineProps({
    month: {
        type: String,
        required: true,
    },
    shifts: {
        type: Array,
        default: () => [],
    },
});

const selectedDate = ref(null);
// TODO  - add types
const selectDate = (fullDate) => {
    selectedDate.value = fullDate;
    emit('selectDate', fullDate);
};

const getShiftsByDate = (arrayName, date) => {
    if (!date || arrayName.length === 0) return [];
    return arrayName
        .filter((item) => {
            const start = moment(item.start_at, 'YYYY-MM-DD HH:mm:ss');
            const end = moment(item.end_at, 'YYYY-MM-DD HH:mm:ss');

            return start.isSame(date, 'day');
        })
        .sort((a, b) => {
            const A = moment(a.start_at, 'YYYY-MM-DD HH:mm:ss');
            const B = moment(b.start_at, 'YYYY-MM-DD HH:mm:ss');
            return A < B ? -1 : A > B ? 1 : 0;
        })
        .map((item) => {
            return {
                ...item,
                arrayName,
                showEmployeeName: arrayName === 'shiftCoordinators',
            };
        });
};

const calendar = computed(() => {
    const startWeek = moment(props.month, 'MM YYYY').startOf('month');
    const endWeek = moment(props.month, 'MM YYYY').endOf('month');

    const calendar = [] as Array<DayType>;
    const week = startWeek.clone();

    while (week <= endWeek) {
        const days = [] as Array<DayType> & Array<dayOfWeekType>;
        Array(7)
            .fill(0)
            .forEach((item, i) => {
                const day = week
                    .startOf('week')
                    .clone()
                    .add(item + i, 'day');

                if (day.format('MM YYYY') === props.month) {
                    days.push({
                        num: day.format('D'),
                        dayOfWeek: day.format('ddd'),
                        full: day.format('YYYY-MM-DD'),
                        date: day,
                        isCurrentDate: day.isSame(moment(), 'day'),
                        shifts: [...getShiftsByDate(props.shifts, day)],
                    });
                } else {
                    days.push({ dayOfWeek: day.format('ddd') });
                }
            });
        calendar.push({ week: week.week(), days });

        week.add(1, 'week');
    }

    return calendar;
});
</script>

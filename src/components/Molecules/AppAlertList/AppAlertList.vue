<template>
    <div class="app-alert-list">
        <AppAlert
            v-for="{ id, type, message, active, title } in alerts"
            :key="id"
            :text="message"
            :type="type"
            :title="title"
            :active="active"
            @closeAlert="closeSelectedAlert(id)"
        />
    </div>
</template>

<script setup lang="ts">
import './app-alert-list.scss';
import { AppAlert } from '@/components/Atoms';
import { storeToRefs } from 'pinia';
import { useAlerts } from '@/store';

const { alerts } = storeToRefs(useAlerts());
const { removeAlert } = useAlerts();

const closeSelectedAlert = (id: string): void => {
    removeAlert(id);
};
</script>

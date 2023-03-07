<template>
    <v-app>
        <v-layout>
            <AppNav />
            <AppLeftDrawer />
            <AppRightDrawer />
            <v-main>
                <router-view />
            </v-main>
        </v-layout>

        <v-btn @click="addAlert">Add Alert</v-btn>
        <AppAlertList />
    </v-app>
</template>

<script lang="ts" setup>
import { AppLeftDrawer, AppNav, AppRightDrawer, AppAlertList } from '@/components/Molecules';
import { onMounted } from 'vue';
import { useUser, useAlerts } from '@/store';

const { fetch_user } = useUser();
const { alertWarning } = useAlerts();

onMounted(async () => {
    await fetch_user();
});

const addAlert = () => {
    alertWarning('Alert added successfully');
};
</script>

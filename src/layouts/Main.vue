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

        <AppAlertList />
    </v-app>
</template>

<script lang="ts" setup>
import { AppLeftDrawer, AppNav, AppRightDrawer, AppAlertList } from '@/components/Molecules';
import { onMounted } from 'vue';
import { useUser } from '@/store';

const { fetch_user } = useUser();

onMounted(async () => {
    await fetch_user();
});
</script>

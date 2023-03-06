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
    </v-app>
</template>

<script lang="ts" setup>
import { AppLeftDrawer, AppNav, AppRightDrawer } from '@/components/Molecules';
import { onMounted } from 'vue';
import { useUser } from '@/store';

const { fetch_user } = useUser();

onMounted(async () => {
    await fetch_user();
});
</script>

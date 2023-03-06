<template>
    <v-app>
        <v-layout>
            <v-main class="auth-layout">
                <router-view />
            </v-main>
        </v-layout>
    </v-app>
</template>

<script lang="ts" setup>
import './auth.scss';
</script>

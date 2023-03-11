<template>
    <div v-if="loading" :class="['app-loader', { 'app-loader--full': full }]">
        <v-progress-circular indeterminate color="amber" :size="full ? 50 : 25" />
    </div>
</template>

<script setup lang="ts">
import './app-loader.scss';

withDefaults(
    defineProps<{
        full?: boolean;
        loading?: boolean;
    }>(),
    {
        full: false,
        loading: false,
    }
);
</script>

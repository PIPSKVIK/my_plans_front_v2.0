<template>
    <v-alert
        :model-value="active"
        :text="text"
        :type="type"
        :title="title"
        density="compact"
        border="start"
        class="mb-2"
        closable
        @update:modelValue="closeAlert = $event"
    />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits<{
    (e: 'closeAlert'): void;
}>();

export interface Props {
    active: boolean;
    text: string;
    type: 'success' | 'warning' | 'error' | 'info' | undefined;
    title: string;
}

withDefaults(defineProps<Props>(), {
    active: false,
    title: 'Default title',
});

const closeAlert = ref('');

watch(closeAlert, (val) => {
    if (!val) emit('closeAlert');
});
</script>

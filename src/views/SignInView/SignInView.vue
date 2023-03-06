<template>
    <div class="auth-view">
        <div class="d-flex justify-center mb-4">
            <svg width="40px" height="40px">
                <use xlink:href="/sprite.svg#icon-logo-example" />
            </svg>
        </div>
        <v-text-field v-model="state.username" label="User name" required />
        <v-text-field v-model="state.password" label="Password" required type="password" />
        <v-btn color="blue_100" block :loading="isLoading" @click="submitForm">SignIn</v-btn>
    </div>
</template>

<script setup lang="ts">
import './auth-view.scss';
import { reactive, ref } from 'vue';
import { useUser } from '@/store';
import { useRouter } from 'vue-router';

const { signIn } = useUser();
const router = useRouter();

const initialState = {
    username: '',
    password: '',
};
const state = reactive({ ...initialState });
const isLoading = ref(false);

const submitForm = async () => {
    isLoading.value = true;

    const res = await signIn(state);
    if (res) {
        await router.push({ name: 'Calendar' });
    }
    isLoading.value = false;
};
</script>

<template>
    <div class="auth-view">
        <div class="d-flex justify-center mb-4">
            <svg width="40px" height="40px">
                <use xlink:href="/sprite.svg#icon-logo-example" />
            </svg>
        </div>
        <v-text-field v-model="state.username" label="User name" required />
        <v-text-field v-model="state.password" label="Password" required />
        <v-btn color="blue_100" block @click="submitForm"> SignIn </v-btn>
        <!-- <v-text-field
            v-model="state.email"
            label="E-mail"
            required
            :error-messages="v$.email.$errors.map((e) => e.$message)"
            @input="v$.email.$touch"
            @blur="v$.email.$touch"
        /> -->
    </div>
</template>

<script setup lang="ts">
import './auth-view.scss';
import { reactive } from 'vue';
import { useUser } from '@/store';

const { signIn } = useUser();

const initialState = {
    username: '',
    password: '',
};
const state = reactive({ ...initialState });

const submitForm = async () => {
    await signIn(state);
};
</script>

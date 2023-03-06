import { defineStore } from 'pinia';
import { signIn, fetchUser, AuthUser, User } from '@/services/user.service';

export type UserRootState = {
    access_token: string;
    token_type: string;
    user: User;
};

export const useUser = defineStore({
    id: 'user',
    state: () =>
        ({
            access_token: '',
            token_type: '',
            user: JSON.parse(localStorage.getItem('user') ?? '') || {},
        } as UserRootState),
    actions: {
        async signIn(payload: AuthUser) {
            try {
                const { data } = await signIn(payload);
                if (data) {
                    this.$state.access_token = data.access_token;
                    this.$state.token_type = data.token_type;
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem('token_type', data.token_type);
                }
                return data;
            } catch (error) {
                console.log(error);
            }
        },

        async fetch_user() {
            try {
                const { data } = await fetchUser();
                localStorage.setItem('user', JSON.stringify(data));
                this.$state.user = data;
            } catch (error) {
                console.log(error);
            }
        },
    },
});

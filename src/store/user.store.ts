import { defineStore } from 'pinia';
import { signIn, User } from '@/services/user.service';

export const useUser = defineStore({
    id: 'user',
    state: () => ({
        user: null,
    }),
    actions: {
        async signIn(payload: User) {
            try {
                const { data } = await signIn(payload);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
    },
});

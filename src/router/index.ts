import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/calendar',
        component: () => import('@/layouts/Main.vue'),
        children: [
            {
                path: '/calendar',
                name: 'Calendar',
                component: () =>
                    import(
                        /* webpackChunkName: "calendar" */ '@/views/CalendarView/CalendarView.vue'
                    ),
            },
        ],
    },
    {
        path: '/auth',
        redirect: '/auth/sign-in',
        component: () => import('@/layouts/Auth.vue'),
        children: [
            {
                path: '/auth/sign-in',
                name: 'SignIn',
                component: () =>
                    import(/* webpackChunkName: "sign-in" */ '@/views/SignInView/SignInView.vue'),
            },
            {
                path: '/auth/sign-up',
                name: 'SignUp',
                component: () =>
                    import(/* webpackChunkName: "sign-up" */ '@/views/SignUpView/SignUpView.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

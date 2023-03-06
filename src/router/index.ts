import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useUser } from '@/store';

const routes: Array<RouteRecordRaw> = [
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
                beforeEnter: (to, from, next) => {
                    useUser()?.user?.id ? next('/') : next();
                },
                name: 'SignIn',
                component: () =>
                    import(/* webpackChunkName: "sign-in" */ '@/views/SignInView/SignInView.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(async (to) => {
    const isAuth = localStorage.getItem('access_token');
    if (!isAuth && to.name !== 'SignIn' && to.name !== 'SignUp') {
        return { name: 'SignIn' };
    }
});

export default router;

export const ENDPOINTS = {
    users: {
        get_all_users: '/auth/users',
        get_user: '/auth/user',
        create_user: '/auth/sign-up',
    },

    auth: {
        signIn: '/auth/sign-in',
    },

    shifts: {
        default: '/shifts/',
        shifts_by_month: 'shifts/shifts-by-month/',
        type_shift: 'shifts/type-shift/',
        status_shift: 'shifts/status-shift/',
        shift_by_id: 'shifts/shift',
    },
};

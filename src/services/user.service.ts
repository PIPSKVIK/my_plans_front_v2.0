import { http } from './http';
import { ENDPOINTS } from '@/constants/endpoints';
import { AxiosResponse } from 'axios';

interface responseSignIn {
    access_token: string;
    token_type: string;
}
export interface AuthUser {
    username: string;
    password: string;
    data?: responseSignIn;
}

export interface User {
    email: string;
    username: string;
    address: string;
    phone: string;
    status: string;
    nickname: string;
    bio: string;
    is_active: boolean;
    is_admin: boolean;
    id: number;
}

export const signIn = async (user_data: AuthUser): Promise<AuthUser> => {
    const headers = {
        'Content-Type': 'multipart/form-data',
    };
    return await http.post<AuthUser>(ENDPOINTS.auth.signIn, user_data, { headers });
};

export const fetchUser = async (): Promise<AxiosResponse> => {
    return await http.get<User>(ENDPOINTS.users.get_user);
};

// export const fetchUsers = async (): Promise<User[]> => {
//     return await http.get<User[]>('/users');
// };

// export const createUser = async (user: User): Promise<User> => {
//     return await http.post<User>('/users', user);
// };

// export const updateUser = async (user: User): Promise<User> => {
//     return await http.put<User>(`/users/${user.id}`, user);
// };

// export const deleteUser = async (user: User): Promise<User> => {
//     return await http.delete<User>(`/users/${user.id}`);
// };

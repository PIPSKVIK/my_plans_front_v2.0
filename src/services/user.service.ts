import { http } from './http';
import { ENDPOINTS } from '@/constants/endpoints';

interface responseSignIn {
    access_token: string;
    token_type: string;
}
export interface User {
    username: string;
    password: string;
    data?: responseSignIn;
}

export const signIn = async (user_data: User): Promise<User> => {
    const headers = {
        'Content-Type': 'multipart/form-data',
    };
    return await http.post<User>(ENDPOINTS.auth.signIn, user_data, { headers });
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

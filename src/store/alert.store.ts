import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

interface Item {
    id: string;
    message: string;
    type: string;
    autoDelete: boolean;
    active: boolean;
    title: string;
}

export type RootState = {
    alerts: Item[];
};

export const useAlerts = defineStore({
    id: 'alert',
    state: () =>
        ({
            alerts: [],
        } as RootState),
    actions: {
        add({ message = '', type = '', autoDelete = true, timer = 1000000, title = '' }) {
            const uuid = uuidv4();
            this.alerts.push({
                id: uuid,
                message,
                type,
                autoDelete,
                active: true,
                title,
            });
            if (autoDelete) {
                setTimeout(() => {
                    this.alerts = this.alerts.filter(({ id }) => id !== uuid);
                }, timer);
            }
        },

        alertSuccess(message: string) {
            this.add({ message, type: 'success', title: 'Success' });
        },
        alertInfo(message: string) {
            this.add({ message, type: 'info', title: 'Info' });
        },
        alertWarning(message: string) {
            this.add({ message, type: 'warning', title: 'Warning' });
        },
        alertError(message: string) {
            this.add({ message, type: 'error', title: 'Error' });
        },
        removeAlert(removeId: string) {
            this.alerts = this.alerts.filter(({ id }) => id !== removeId);
        },
    },
});

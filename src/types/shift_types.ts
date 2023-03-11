export interface TShift {
    id?: number | null;
    name: string | undefined;
    comment: string;
    end_at: string | undefined;
    end_time: string;
    isEnded: boolean;
    is_anomaly_time?: boolean;
    location: string;
    month?: number | null;
    shift_user_id?: number | null;
    start_at: string;
    start_time: string;
    type: string;
    status: string;
    username?: string;
}

export interface TShiftCreate {
    comment?: string;
    end_time?: string;
    isEnded?: boolean;
    location?: string;
    name?: string;
    shift_user_id?: string;
    start_time?: string;
    status?: string;
    type?: string;
}

export interface Toast {
    summary: string;
    message: string;

    severity?: string;    
    duration?: number;
}
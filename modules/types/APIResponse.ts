export interface APIResponse<T> {
    status: number;
    message: T;
}
import { APIResponse } from '@/modules/types/APIResponse';
import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
    timeout: 20000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use((req) => {
    const cookies = document.cookie.split(';').reduce((obj, val) => {
        const [key, value] = val.trim().split("=").map(decodeURIComponent);

        return { ...obj, [key]: value };
    }, {} as Record<string, string>);

    if (req.headers) {
        req.headers['X-XSRF-TOKEN'] = cookies['XSRF-TOKEN'] || 'nil';
    }

    return req;
});

export default http;

export function httpErrorToHuman(error: any): string {
    if (error.response && error.response.data) {
        let { data } = error.response;

        if (typeof data === 'string') {
            try {
                data = JSON.parse(data);
            } catch (esx) {
                console.log(esx)
            }
        }

        if (data.errors && data.errors[0] && data.errors[0].detail) {
            return data.errors[0].detail;
        }

        if (data.error && typeof data.error === 'string') {
            return data.error;
        }
    }

    return error.message;
}

export async function sendPostRequest<T>(url: string, data: Record<string, any>, success: (response: APIResponse<T>) => void, error: (response: APIResponse<T>) => void, catchCB: (err: any) => void) {
    try {
        const response = (await http.post(url, data, { headers: { 'Content-Type': 'application/json' } })).data as APIResponse<T>

        if (response.status == 200) success(response)
        else error(response)
    } catch(err: any) {
        console.error(`[HTTP Error] An error has occured while trying to make a http request.\nPath=${url}\nPayload=${JSON.stringify(data)}\nError: ${httpErrorToHuman(err)}`)
        catchCB(err)
    }
}
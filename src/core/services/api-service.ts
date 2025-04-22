import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants/constants";
import { injectable } from "inversify";

@injectable()
export class ApiService {
    private api: AxiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    public async get<T>(url: string): Promise<T> {
        const response = await this.api.get<T>(url);
        return response.data;
    }
}
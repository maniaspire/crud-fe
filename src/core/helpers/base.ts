import axios from "axios";
import localStorage from "../../shared/services/localStorage";

export const getBaseUrl = () => {
    return 'http://localhost:3001/';
}

export const getAccessToken = () => {
    return localStorage.getItem('crud_token') || "";
}

export const Axios = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        Authorization: `Bearer ${getAccessToken()}`
    }
})
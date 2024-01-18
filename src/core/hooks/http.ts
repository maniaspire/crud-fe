import { Axios } from "../helpers";


const useHttp = (apiBaseUrl: string) => {

    const getApiEndPoint = (url: string) => url === '' ? apiBaseUrl : `${apiBaseUrl}/${url}`

    const get = (url: string, params?: any): Promise<any> => {
        return Axios.get(getApiEndPoint(url), { params });
    }

    const post = (url: string, data: any) => {
        return Axios.post(getApiEndPoint(url), data);
    }

    const update = (url: string, id: string, data: any) => {
        return Axios.put(`${getApiEndPoint(url)}/${id}`, data);
    }

    const deleteApi = (url: string, id: string) => {
        return Axios.delete(`${getApiEndPoint(url)}/${id}`);
    }

    return { get, post, update, deleteApi }
}

export { useHttp };
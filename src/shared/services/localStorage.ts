class LocalStorage {
    setItem(key: string, value: any) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    getItem<T>(key: string): T {
        const data: string = localStorage.getItem(key);
        if (data)
            return JSON.parse(data);
        throw Error('value not found');
    }
    

}

const localStorage = new LocalStorage();
export default localStorage;
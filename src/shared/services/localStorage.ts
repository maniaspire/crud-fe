class LocalStorage {
    setItem(key: string, value: any) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    getItem(key: string): string {
        const data: string = localStorage.getItem(key) || "";
        return data;
    }


}

const localStorageObj = new LocalStorage();
export default localStorageObj;
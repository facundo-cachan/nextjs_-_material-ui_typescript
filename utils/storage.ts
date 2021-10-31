type storageProps = {
    key: string;
    value: any;
};

export const setLocalStorage = ({ key, value }: storageProps) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        return e;
    }
};

export const getLocalStorage = ({ key, value }: storageProps) => {
    try {
        const storage = window.localStorage.getItem(key);

        return storage ? JSON.parse(storage) : value;
    } catch (e) {
        return value;
    }
};

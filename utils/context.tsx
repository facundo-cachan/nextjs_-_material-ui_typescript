import { useContext, createContext, useState, useMemo, Context, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from './storage';

export const AppContext: Context<any> = createContext<any>(null);

export const AppContextProvider = ({ children }: any) => {
    const initialCredentials = getLocalStorage({ key: 'credentials', value: null });

    const [variableState, setVariableState] = useState<any>();
    const [stepTop, setStepTop] = useState<number>(0);
    const [stepBottom, setStepBottom] = useState<number>(0);
    const [userEmail, setUserEmail] = useState<string>();
    const [credentials, setCredentials] = useState(initialCredentials);
    const send = () => console.log('Send API GRaphQL ', variableState);
    const values = useMemo(
        () => ({
            send,
            variableState,
            setVariableState,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [variableState],
    );
    useEffect(() => {
        setLocalStorage({ key: 'credentials', value: credentials });
    }, [credentials]);

    return (
        <AppContext.Provider
            value={{
                ...values,
                userEmail,
                setUserEmail,
                stepTop,
                setStepTop,
                stepBottom,
                setStepBottom,
                credentials,
                setCredentials,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        console.error('Error deploying App Context!!!');
    }
    return context;
}

export default useAppContext;

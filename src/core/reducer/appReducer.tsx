import { createContext, useReducer } from "react";

interface ReducerPayload {
    type: string,
    data: any
}



const Reducer = (state: any, { type, data }: ReducerPayload) => {
    console.log(type, state, 'i am here');
    switch (type) {
        case 'setUser': {
            return { ...state, user: data }
        }
        case 'clearUser': {
            return { ...state, user: null }
        }
        default: {
            return state;
        }
    }

}

export const useAppReducer = () => {
    const [value, reducer] = useReducer(Reducer, {});

    const dispatch = (data: ReducerPayload) => {
        return reducer(data);
    }

    const getContextValue = (key?: string) => {
        return key ? value[key] : value;
    }
    return { dispatch, getContextValue }
}


export const AppContext = createContext({} as { [key: string]: any });

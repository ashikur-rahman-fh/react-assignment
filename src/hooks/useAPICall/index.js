import { useEffect, useCallback, useReducer } from "react";
import axios from "axios";
import { ACTION_TYPE, INITIAL_STATE } from "./constants";
import { stateReducer } from "./helper";

const useFetchAPI = (url, method, data, params, headers) => {
    const [state, dispatch] = useReducer(stateReducer, INITIAL_STATE);

    const getData = useCallback( async (controller) => {
        dispatch({ type: ACTION_TYPE.LOADING, payload: true });

        try {
            const response = await axios(url, {
                headers: headers,
                signal: controller.signal,
                method: method,
                data: data,
                params: params,
            });
            dispatch({ type: ACTION_TYPE.DATA, payload: response.data });
            dispatch({ type: ACTION_TYPE.ERROR, payload: false });
        } catch(error) {
            dispatch({ type: ACTION_TYPE.DATA, payload: [] });
            dispatch({ type: ACTION_TYPE.ERROR, payload: true });
        }
        if (!controller.signal.aborted) {
            dispatch({ type: ACTION_TYPE.LOADING, payload: false });
        }
    }, [url, method, data, params, headers]);

    useEffect(() => {
        const abortController = new AbortController();
        getData(abortController);

        return () => {
            abortController.abort();
        }
    }, [getData]);

    return state;
};

export default useFetchAPI;


/*
useFetch -> generic
cancel request -> 
useReducer -> to state, success, fail
formic -> react packages
*/
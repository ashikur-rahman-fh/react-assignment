import { ACTION_TYPE } from "./constants";

export const stateReducer = (state, action) => {
    switch(action.type) {
        case ACTION_TYPE.LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        case ACTION_TYPE.ERROR:
            return {
                ...state,
                isError: action.payload,
            }
        case ACTION_TYPE.DATA:
            return {
                ...state,
                data: action.payload,
            }
        
        default:
            throw new Error('No matching action');
    }
};

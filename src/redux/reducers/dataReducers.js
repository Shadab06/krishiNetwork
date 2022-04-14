import { FETCH_ALL } from "../constants";

export default (state = { userData: null }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            localStorage.setItem('data', JSON.stringify({ ...action?.payload }));
            return { ...state, userData: action?.payload };
        default:
            return state;
    }
}
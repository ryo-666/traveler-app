import { createStore } from "redux";

const initialState = {
    keyword: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setKeyword':
            return { keyword: action.value, };
        default:
            return state;
    }
};

export default createStore(reducer);
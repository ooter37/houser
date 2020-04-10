import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  img: "",
  mortgage: "",
  rent: "",
};

export const STEP_ONE = 'STEP_ONE'
export const STEP_TWO = 'STEP_TWO'
export const STEP_THREE = 'STEP_THREE'
export const CLEAR = 'CLEAR'


function reducer(state = initialState, action) {
    switch (action.type) {
        case STEP_ONE:
            return {
                ...state, initialState: action.payload
            };
        case STEP_TWO:
            return {
                ...state,
                img: action.payload
            };
        case STEP_THREE:
            return {
                ...state,
                mortgage: action.payload,
                rent: action.payload
            };
        case CLEAR: 
            return {
                name: "",
                address: "",
                city: "",
                state: "",
                img: "",
                mortgage: "",
                rent: ""
            }
        default:
            return state;
    }
}

export default createStore(reducer)
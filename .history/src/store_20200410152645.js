import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: '',
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
                name: action.payload.name, 
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip
            };
        case STEP_TWO:
            return {
                ...state,
                img: action.payload.img
            };
        case STEP_THREE:
            return {
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
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
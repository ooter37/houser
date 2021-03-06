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


function reducer(state = initialState, action) {
    switch (action.type) {
        case STEP_ONE:
            return {
                ...state, 
                name: action.payload, 
                address: action.payload,
                city: action.payload,
                state: action.payload
                
            }
        default:
            return state;
    }
}

export default createStore(reducer)
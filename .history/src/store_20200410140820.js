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

export const DEFAULT = 'DEFAULT'

function reducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT:
            return {
                ...state
            };
    }
}
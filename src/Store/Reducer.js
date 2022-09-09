import { CHANGE_POSITION } from "./actionTypes";

const initialState = {
    position: ""
}

export const rootReducer = (state=initialState, action={}) => {
  if (action.type === CHANGE_POSITION)
    return {
      ...state,
      position: action.payload,
    }

    return state;
};

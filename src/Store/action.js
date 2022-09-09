import { CHANGE_POSITION } from "./actionTypes"

export const changePosition = pos => {
    return {
        type: CHANGE_POSITION,
        payload: pos
    }
}
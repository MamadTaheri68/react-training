import {ActionConstants} from "../ActionConstants";

export default (state = 0, action) => {
    switch (action.type) {
        case ActionConstants.INCREMENT :
            return state + 1
        case ActionConstants.DECREMENT :
            return state - 1
        default:
            return state
    }


}
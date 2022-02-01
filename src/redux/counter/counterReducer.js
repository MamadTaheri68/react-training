const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case "INCREASE":
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state
    }
}

export default counterReducer;
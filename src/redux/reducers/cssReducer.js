export const UPDATE_MARGIN_LEFT = 'UPDATE_MARGIN_LEFT'

const initialState = {
    marginLeft: 50 //initialValue
}

const cssReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MARGIN_LEFT : return {...state, marginLeft: action.payload}
        default: return state;
    }
}

export default cssReducer;
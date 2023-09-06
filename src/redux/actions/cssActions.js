import { UPDATE_MARGIN_LEFT } from '../reducers/cssReducer'

export const updateMarginLeft = (marginLeft) => {
    return {
        type: UPDATE_MARGIN_LEFT,
        payload: marginLeft,
    }
}
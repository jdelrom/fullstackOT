import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { merge } from 'lodash';
const modalReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            
            if (action.review !== undefined) {
                return [action.modal, action.review]
            } else {
                return [action.modal];
            }
           
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default modalReducer;
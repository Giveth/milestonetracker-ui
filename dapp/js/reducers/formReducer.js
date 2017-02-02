import * as c from "../constants";

const formReducer = (state = { values: {} }, action) => {
    switch (action.type) {

    case c.FORM_UPDATE_VALUE:
        return Object.assign({}, state, {
            values: Object.assign({}, state.values, { [ action.name ]: action.value }),
        });

    case c.FORM_RESET:
        return { values: {} };

    default:
        return state;
    }
};

export default formReducer;

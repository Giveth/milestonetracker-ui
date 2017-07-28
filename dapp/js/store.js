import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import moment from "moment";

import reducer from "./reducers";
import initialState from "./initialState";

const middleware = applyMiddleware(thunk, createLogger());

function debounce(func, wait, immediate) {
    let timeout;
    return (...args) => {
        const context = this;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// only persist newMilestones for now
const persistedState = () => {
    const newMilestones = localStorage.getItem("newMilestones") ?
        JSON.parse(localStorage.getItem("newMilestones")) : {};

    Object.keys(newMilestones).forEach((key) => {
        const milestones = newMilestones[ key ].milestones;
        for (let i = 0; i < milestones.length; i += 1) {
            const m = milestones[ i ];
            m.minCompletionDate = moment(m.minCompletionDate);
            m.maxCompletionDate = moment(m.maxCompletionDate);
        }
    });

    return { newMilestones };
};

const store = createStore(
    reducer,
    Object.assign(initialState(), persistedState()),
    middleware,
);

store.subscribe(debounce(() => {
    const milestones = store.getState().newMilestones;
    localStorage.setItem("newMilestones", JSON.stringify(milestones));
}, 250, false));

export default store;

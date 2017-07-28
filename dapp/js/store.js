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
    const givethState = localStorage.getItem("giveth-state") ?
        JSON.parse(localStorage.getItem("giveth-state")) : {};

    if (givethState.givethDirectory) {
        givethState.givethDirectory.loaded = false;
    }

    if (givethState.newMilestones) {
        Object.keys(givethState.newMilestones).forEach((key) => {
            const milestones = givethState.newMilestones[ key ].milestones;
            for (let i = 0; i < milestones.length; i += 1) {
                const m = milestones[ i ];
                m.minCompletionDate = moment(m.minCompletionDate);
                m.maxCompletionDate = moment(m.maxCompletionDate);
            }
        });
    }

    return givethState;
};

const store = createStore(
    reducer,
    Object.assign(initialState(), persistedState()),
    middleware,
);

store.subscribe(debounce(() => {
    const milestones = store.getState().newMilestones;
    const givethDirectory = store.getState().givethDirectory;

    localStorage.setItem("giveth-state", JSON.stringify({
        newMilestones: milestones,
        givethDirectory,
    }));
}, 250, false));

export default store;

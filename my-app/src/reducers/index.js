import {combineReducers} from "redux";

import {moviesReducer} from "./movies";
import {sessionsReducer} from "./sessions";

export const rootReducer = combineReducers({
    filmsData: moviesReducer,
    scheduleData: sessionsReducer
});
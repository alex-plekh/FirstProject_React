
import axios from "axios";

import {SESSIONS_URL, SET_SESSIONS, SET_SESSIONS_FAIL} from "../constans";

const setSessions = (data) => ({
    type: SET_SESSIONS,
    payload: data
});

const setSessionsFail = () => ({
    type: SET_SESSIONS_FAIL
});

export const getSessions = () => {
    return (dispatch) => {
        axios.get(SESSIONS_URL)
            .then((response) => dispatch(setSessions(response.data.sessions)))
            .catch(() => dispatch(setSessionsFail()))
    };
};
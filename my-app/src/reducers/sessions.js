import {SET_SESSIONS,SET_SESSIONS_FAIL} from "../constans";

const defaultValues = {
    isLoading: true,
    sessions: []
};

export const sessionsReducer = (state = defaultValues, action) => {
    switch (action.type) {
        case SET_SESSIONS: {
            const sessions = action.payload.reduce((acc, item) => {
                const [date,] = item.date.split('T');
                const hasCurrentDate = acc.some((elem) => elem.date === date);

                if (hasCurrentDate) {
                    return acc.map((day) => {
                        if (day.date === date) {
                            return {
                                ...day,
                                sessions: [...day.sessions, item].sort((a,b) => a.date > b.date ? 1 : -1)
                            }
                        }
                        return day;
                    })
                }else {
                    return [...acc, { date: date, sessions: [item] }].sort((a,b) => a.date > b.date ? 1 : -1)
                }
            }, []);

            console.log("sessions",sessions)

            return {
                isLoading: false,
                sessions
            };
        }
        case SET_SESSIONS_FAIL: {
            return {
                isLoading: false,
                sessions: []
            }
        }
        default: {
            return state;
        }
    }
};

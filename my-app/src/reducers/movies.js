import {SET_MOVIES,SET_MOVIES_FAIL} from "../constans";

const defaultValues = {
    isLoading:true,
    movies: [],
    genres: []
};

export const moviesReducer = (state=defaultValues, action) => {
    switch (action.type) {
        case SET_MOVIES: {
            const genres = action.payload.reduce((acc, item) => {
                if (item.genre?.length) {
                    item.genre.forEach((elem) => {
                        const value = elem.trim();
                        if (!acc.includes(value)) {
                            acc.push(value);
                        }
                    });
                }
                return acc;
            }, []);

            return{
                ...state,
                isLoading:false,
                movies:action.payload,
                genres
            };
        }
        case SET_MOVIES_FAIL : {
            return {
                ...state,
                isLoading: false
            };
        }
        default: {
            return state;
        }
    }
};
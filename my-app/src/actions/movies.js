import axios from "axios";
import {MOVIE_URL,SET_MOVIES_FAIL,SET_MOVIES } from "../constans"

const setMovies = (data) => ({
    type:SET_MOVIES,
    payload:data
});

const setMoviesFail = () => ({
    type: SET_MOVIES_FAIL
})
export const getMovies = () => {
    return(dispatch) => {
        axios.get(MOVIE_URL)
            .then((response) => dispatch(setMovies(response.data.movies)))
            .catch(() => dispatch(setMoviesFail()));
    };
};
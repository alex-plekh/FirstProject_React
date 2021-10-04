import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import { Poster} from "./poster";
import {Info} from "./info";


export const MoviePage = () => {
    const movies = useSelector((state) => state.filmsData.movies);
    const { id } = useParams();
    const movie = useMemo(() => {
        return movies.find((item) => item.id === +id);
    }, [movies, id]);

    return (
        <div className="movie-page">
            <h1>{movie.title}</h1>
            <div className="movie-info">
            <Poster url={movie.poster}/>
            <div>
                <Info title="Actors" content={movie.actors.join(', ')}/>
                <Info title="Genre" content={movie.genre.join(', ')}/>
                <Info title="Countries" content={movie.country.join(', ')}/>
                <Info title="Language" content={movie.language}/>
                <Info title="Age" content={movie.age ? `${movie.age}+`: "No age restrictions" }/>
                <Info title="Description" content={movie.description }/>
                <Info title="Trailer" content={
                    <iframe
                    title="video"
                    width="100%"
                    height="400px"
                    src={movie.trailer}
                    allowFullScreen
                    />
                }/>
            </div>
        </div>
        </div>
    );
};





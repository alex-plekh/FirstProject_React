import React from "react";
import {Link} from "react-router-dom";

export const MoviePreview = ({movie}) => (
    <Link to={`/movie/${movie.id}`}>
        <img src={movie.poster} alt={movie.title}/>
        <div className="movie-title">{movie.title}</div>
    </Link>
);
import { directive } from "@babel/types";
import React from "react";

const Movie = ({movieDetails}) => {
    return(
        <article className="movie-card">
            <img className="movie-img" src={movieDetails.Poster}></img>
            <div className="movie-name">
            <h3 >{movieDetails.Title}</h3>
            <h4>{movieDetails.Year}</h4>
            </div>
        </article>
    )
}
export default Movie;
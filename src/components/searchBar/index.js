import React, { useEffect, useState } from "react";
import axios from "axios";
const Search = ({movieData}) => {
    const [data , setData] = useState([]);
    const movieSearch = (e) => {
        const value = document.getElementById("search-bar").value;
        axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${value}`)
             .then(res => setData(res.data.Search));
    }
    const receive = () => {
        if(data !== undefined) {
        movieData(data)
        } else {
            alert("Please Enter A Valid Movie Name!")
        }
    }
     return(
        <div>
            <label>
            <input onChange={movieSearch} id="search-bar" type="text" placeholder="Search Movie Name"></input>
            <button onClick={receive}  id="search-btn">Search</button>
            </label>
        </div>
    )
}

export default Search;
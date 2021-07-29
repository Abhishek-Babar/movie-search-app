import React, { useEffect, useState } from "react";
import axios from "axios";
const Search = ({movieData}) => {
    const [data , setData] = useState([]);
    const movieSearch = (e) => {
        const value = document.getElementById("search-bar").value;
        axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${value}`)
             .then(res => setData(res.data.Search));
    }
   useEffect(() => {
       movieData(data)
   },[data])
     return(
        <div>
            <label>
            <input id="search-bar" type="text" placeholder="Search Movie Name"></input>
            <button onClick={movieSearch}  id="search-btn">Search</button>
            </label>
        </div>
    )
}

export default Search;

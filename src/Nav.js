import React from 'react'
import "./Nav.css";
import requests from "./request";


function Nav({setSelectedOption}) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedOption(requests.action)}>Action</h2>
            <h2 onClick={() => setSelectedOption(requests.comedy)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(requests.horror)}>Horror</h2>
            <h2 onClick={() => setSelectedOption(requests.romance)}>Romance</h2>
            <h2 onClick={() => setSelectedOption(requests.mystery)}>Mystery</h2>
            <h2 onClick={() => setSelectedOption(requests.scifi)}>Sci-fi</h2>
            <h2 onClick={() => setSelectedOption(requests.western)}>Western</h2>
            <h2 onClick={() => setSelectedOption(requests.animation)}>Animation</h2>
            <h2 onClick={() => setSelectedOption(requests.movie)}>Movie</h2>
        </div>
    )
}

export default Nav

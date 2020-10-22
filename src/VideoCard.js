import React, { forwardRef } from 'react';
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({movie}, ref) => {
    return (
        <div ref={ref} className="videocard">
            <img src={`${url}${movie.backdrop_path || movie.poster_path}`} alt=""/>
            <TextTruncate
                line={1}
                element="p"
                truncateText="--"
                text={movie.overview}
            />
            <h2>{movie.title}</h2>
            <p className="datenvote">
                {movie.release_date} <ThumbUpIcon/>{movie.vote_count}
            </p>
        </div>
    )
});

export default VideoCard;

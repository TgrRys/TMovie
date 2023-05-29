import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieDetails = ({ current }) => {
  return (
    <div>
      <div className="movie-details">
        <img
          className="details-image"
          src={API_IMG + current.poster_path}
          alt=""
        ></img>
        <div className="details-main">
          <div className="details-info">
            <h1 className="details-title">{current.title}</h1>
            <div className="details-about">
              <h3 className="fontHead">ABOUT: </h3>
              <p>{current.overview}</p>
            </div>
            <div className="rating">
              <div className="details-about">
                <h3 className="fontHead">IMDB Rating: </h3>
                <p>{current.vote_average}/10</p>
              </div>
              <div className="details-about">
                <h3 className="fontHead">Release Date: </h3>
                <p>{current.release_date}</p>
              </div>
              <div className="details-about">
                <h3 className="fontHead">Popularity: </h3>
                <p>{current.popularity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
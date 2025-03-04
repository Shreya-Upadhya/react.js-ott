import React from 'react';

 const MovieList = (props)=>{
    const FavouriteComponent = props.favouriteComponent;
    ;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-content-start m-3" key={index}>
                    <img 
                        src={movie.Poster} 
                        alt="movie" 
                        onClick={() => props.handlePosterClick(movie.imdbID)} // Add click handler
                    />
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className="overlay d-flex align-items-center justify-content-center"
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
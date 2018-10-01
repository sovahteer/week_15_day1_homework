import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
    render() {

        console.log(this.props.movies);
        const movieNodes = this.props.movies.map((movie, index) => {
            return (
                <Movie
                title={movie.title}
                key={index}>{movie.text}</Movie>
            )
        })

        return (
            <React.Fragment>
                {movieNodes}
            </React.Fragment>
        )
    }
}

export default MovieList;
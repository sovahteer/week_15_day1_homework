import React, { Component } from 'react';
import MovieList from '../components/MovieList';


class ShowtimeBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies: [
                {title: "Master and Commander", text: "showtimes"},
                {title: "Pirates of the Carribean: Curse of the Black Pearl", text: "showtimes"},
                {title: "Muppets Treasure Island", text: "showtimes"}
            ]
        }
    }
    
    render() {
        return <MovieList movies={this.state.movies} />
    }
}

export default ShowtimeBox;
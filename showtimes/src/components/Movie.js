import React, { Component } from 'react';

class Movie extends Component {

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <a>{this.props.children}</a>
            </div>
        )

    }
}

export default Movie;
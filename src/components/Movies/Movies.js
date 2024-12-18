import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {

 state = { 
        movies: [
            {
                imdbID: 'tt6052734',
                Title: "UFC 123: Rampage vs. Machida ",
                Year: 2010,
                Poster: "https://m.media-amazon.com/images/M/MV5BNmY3M2NkYTctZTI1MC00MzZmLTlmOWUtZTZjNTFhNjhlNjViXkEyXkFqcGc@._V1_SX300.jpg"

            },
            {
                imdbID: 'tt15574124',
                Title: "Peaky Blinders",
                Year:"2013–2022",
                Poster: "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_SX300.jpg"

            },
            {
                imdbID: 'tt0816711',
                Title: "World War Z",
                Year:"2013",
                Poster: "https://m.media-amazon.com/images/M/MV5BODg3ZTM2YWQtZDE5Ny00NGNiLTkzYjgtYWVlYjNkOTg5NDI1XkEyXkFqcGc@._V1_SX300.jpg"

            },
            {
                imdbID: 'tt0944947',
                Title: "Game of Thrones ",
                Year:"2011–2019",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_SX300.jpg"

            },
            {
                imdbID: 'tt7286456',
                Title: "Joker",
                Year:"2019",
                Poster: "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_SX300.jpg"
            },
            {
                imdbID: 'tt0120812',
                Title: "Rush Hour",
                Year:"1998",
                Poster: "https://m.media-amazon.com/images/M/MV5BMGZiMzViNmEtNTNlZi00MzFmLTk5NTEtNDE2OTUzNmNlMTY4XkEyXkFqcGc@._V1_SX300.jpg"
            },
            {
                imdbID: 'tt2713180',
                Title: "Fury",
                Year:"2014",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg"
            },
            {
                imdbID: 'tt0133093',
                Title: "The Matrix",
                Year:"1999",
                Poster: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg"
            }
        ]
    }
    componentDidUpdate =(prevProps)=>{
     
           if( prevProps.movies!=this.props.movies){
            this.setState({
                movies: this.props.movies
            })
           }
    }
    render() { 
        return ( 
            <ul className="movies">
                {this.state.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />

                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (s) => {
    return {
        movies: s.movies
    }
}
 
export default connect(mapStateToProps)(Movies);
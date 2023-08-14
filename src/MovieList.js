import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component{

    render(){
       const {movies , toggleBuy , toggleFav , changeCountStars} = this.props;
        return(
            <div className = "movie-list">
                {/* <MovieCard  movies = {this.state.movies} />
                <MovieCard  movies = {this.state.movies} />
                <MovieCard  movies = {this.state.movies} /> */}
                {/* <MovieCard /> */}
                {movies.map((movie)=>(<MovieCard movies = {movie} toggleBuy = {toggleBuy} toggleFav = {toggleFav} changeCountStars = {changeCountStars}/>))}
            </div>
        )
    }
}
//showing how to create default props
// MovieCard.defaultProps = {
//     title : "MovieTitle,
//     plot : "Movie Plot",
//     price : "Movie Price",
//     rating : 0,
//     stars : 0
// }

export default MovieList;
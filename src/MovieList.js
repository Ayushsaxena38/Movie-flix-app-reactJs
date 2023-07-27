import React from "react";
import MovieCard from "./MovieCard";


class MovieList extends React.Component{
    constructor(){
        super();//first call the super constructor. It is important!
        this.state = {
            // title : "Dragon Ball Z Battle of Gods",
            // plot : "The Z-Fighters must contend with Lord Beerus, the God of Destruction, but only a God can fight a God, and none of them are Gods. However with the creation of the Super Saiyan God, will the Z-Fighters be able to defeat Lord Beerus?",
            // price : 299,
            // rating : 7.1,
            // stars : 0,
            // fav : false,
            // buy : false
            movies : [
        {
            title: "Batman Begins",
            plot : "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
            price : "399",
            rating : "8.4",
            stars : 0,
            buy : false,
            fav : false,
            Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            title: "Batman v Superman: Dawn of Justice",
            plot : "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
            price : "250",
            rating : "8",
            stars : 0,
            buy : false,
            fav : false,
            Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            title: "The Batman",
        plot : "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        price : "399",
        rating : "7.2",
        stars : 0,
        buy : false,
        fav : false,
            Poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
        },
        {
            title: "Batman",
        plot : " The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
        price : "150",
        rating : "6.9",
        stars : 0,
        buy : false,
        fav : false,
            Poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
        },
        {
            title: "Batman Returns",
        plot : "While Batman deals with a deformed man calling himself the Penguin wreaking havoc across Gotham with the help of a cruel businessman, a female employee of the latter becomes the Catwoman with her own vendetta.",
        price : "200",
        rating : "8",
        stars : 0,
        buy : false,
        fav : false,
            Poster: "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
        },
        {
            title: "Batman & Robin",
            plot : "Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.",
            price : "399",
            rating : "8.1",
            stars : 0,
            buy : false,
            fav : false,
            Poster: "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
        },
        {
            title: "Batman Forever",
            plot : "Batman must battle former district attorney Harvey Dent, who is now Two-Face and Edward Nygma, The Riddler with help from an amorous psychologist and a young circus acrobat who becomes his sidekick, Robin.",
            price : "299",
            rating : "7.2",
            stars : 0,
            buy : false,
            fav : false,
            Poster: "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            title: "The Lego Batman Movie",
            plot : "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
            price : "199",
            rating : "7",
            stars : 0,
            buy : false,
            fav : false,
            Poster: "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
        },
        {
            title: "Batman: The Animated Series",
        plot : " The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.",
        price : "259",
        rating : "7",
        stars : 0,
        buy : false,
        fav : false,
            Poster: "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
        },
        {
            title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
        plot : "Batman is manipulated by Lex Luthor to fear Superman. Superman´s existence is meanwhile dividing the world and he is framed for murder during an international crisis. The heroes clash and force the neutral Wonder Woman to reemerge.",
        price : "259",
        rating : "8.2",
        stars : 0,
        buy : false,
        fav : true,
            Poster: "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
        }
    ]

        }
    }
    changeCountStars=(movie , inc)=>{
        const {movies} = this.state;//first take movies list which is saved in state.
        const mid = movies.indexOf(movie);//now find which movie index is this from the movie list
        const a = movies[mid];
        if((a.stars>0 && a.stars < 10 )|| (a.stars===10 && inc !== 1) || (a.stars===0 && inc !== -1)){//now check these conditions first
            a.stars += inc;//now increse/decrese the stars
        }
        movies[mid] = a;
        this.setState({//set the new state to render the new value
            movies : movies
        })
    }
    toggleFav = (movie)=>{
        const {movies} = this.state;//first take movies list from the state.
        const mid = movies.indexOf(movie);//now identify which number(index) of movie is this.
        console.log(mid);
        const trgtMovie = movies[mid];
        //now toggle the value
        trgtMovie.fav = !(trgtMovie.fav);
        movies[mid] = trgtMovie;
        console.log(trgtMovie);
        //now set the new state to render the new value
        return this.setState({
            movies : movies
        })
    }
    toggleBuy = (movie)=>{
        const {movies} = this.state;//first take movies list from the state.
        const mid = movies.indexOf(movie);//now identify which number(index) of movie is this.
        console.log(mid);
        const trgtMovie = movies[mid];
        //now toggle the value
        trgtMovie.buy = !(trgtMovie.buy);
        movies[mid] = trgtMovie;
        console.log(trgtMovie);
        //now set the new state to render the new value
        return this.setState({
            movies : movies
        })
    }
    render(){
        return(
            <div className = "movie-list">
                {/* <MovieCard  movies = {this.state.movies} />
                <MovieCard  movies = {this.state.movies} />
                <MovieCard  movies = {this.state.movies} /> */}
                {/* <MovieCard /> */}
                {this.state.movies.map((movie)=>(<MovieCard movies = {movie} toggleBuy = {this.toggleBuy} toggleFav = {this.toggleFav} changeCountStars = {this.changeCountStars}/>))}
            </div>
        )
    }
}
// MovieCard.defaultProps = {
//     title : "MovieTitle,
//     plot : "Movie Plot",
//     price : "Movie Price",
//     rating : 0,
//     stars : 0
// }

export default MovieList;
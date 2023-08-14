import React from 'react';
import MovieList from "./MovieList";
import Navbar from "./Nav";
import {movies} from "./moviesData"
class App extends React.Component  {
  constructor(){
      super();//first call the super constructor. It is important!
      this.state = {
          
          movies : movies,
          cartCount : 0

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
      let {cartCount} = this.state;//now take the cartCount value from state and make it let.
      const mid = movies.indexOf(movie);//now identify which number(index) of movie is this.
      console.log(mid);
      const trgtMovie = movies[mid];
      //now toggle the value
      trgtMovie.buy = !(trgtMovie.buy);
      if(trgtMovie.buy){
        cartCount += 1;
      }else{
        cartCount -= 1;
      }
      movies[mid] = trgtMovie;
      console.log(trgtMovie);
      //now set the new state to render the new value
      return this.setState({
          movies,
          cartCount
      })
  }
  render(){
    return (<>
              < Navbar cartCount = {this.state.cartCount}/>
              <div className="App">
                <MovieList movies = {this.state.movies} toggleBuy = {this.toggleBuy} toggleFav = {this.toggleFav} changeCountStars = {this.changeCountStars} />
              </div>
            </>
    );
  }
  
}

export default App;

import React from "react";
// import image from "./dragon-ball-z-battle.jpg";

class MovieCard extends React.Component{
    // toggleFav = ()=>{
    //     return this.setState({
    //         fav : !this.state.fav
    //     })
    // }
    toggleBuy = ()=>{
        return this.setState({
            buy : !this.state.buy
        })
    }
    // changeCount(inc){
    //     var a = this.state.stars;
    //     if((a>0 && a < 10 )|| (a===10 && inc !== 1) || (a===0 && inc !== -1)){
    //         a += inc;
    //     }
    //     // this.state.stars = a;
    //     this.setState((previousState)=>{
    //         return {
    //             stars: a
    //         }
    //     })
    //     console.log(this.state.stars);
    // }
    render(){
        // console.log(this.props.movies);     
        const {movies : data} = this.props;//taking the movies object in data variable
        // console.log("data ",data);
        const {title , plot , price, rating , stars , fav , buy, Poster} = data;//this is called destructuring.
        return(
            <div className="movieCard">
        <div className="right">
            <div className="posterImg">
                <img alt = "movie poster" src ={Poster}/>
                
            </div>
        </div>
        <div className="left">
            <div className = "title"> <b>TITLE :</b> {title} </div>
            <div className="plot"> <b>PLOT :</b> {plot}</div>
            <div className="price"><b>PRICE :</b>Rs.{price}</div>
            <div className="footer">
                <div className="imdb"><b>Imdb:</b>{rating}</div>
                <div className="stars"><span className= "decrese-btn" onClick={()=>this.props.changeCountStars(data , -1)}>-</span>⭐<span className="increse-btn" onClick = {()=>this.props.changeCountStars(data , 1)}>+&nbsp;</span><span className="str-count"></span>{stars}</div>
                <div className="btns">
                    {(fav)?<button className="red" onClick = {()=>this.props.toggleFav(data)} >
                        Unfav
                    </button>:<button onClick = {()=>this.props.toggleFav(data)}>
                        Fav
                    </button>}
                    {(buy)?<button className="red" onClick = {()=> this.props.toggleBuy(data)}>Remove from Cart</button>:<button  onClick = {()=> this.props.toggleBuy(data)}>
                        Add to cart
                    </button>}
                    
                </div>
            </div>
        </div>
    </div>
        )   
    }
}

export default MovieCard;
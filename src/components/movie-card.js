import React from 'react';
import '../App.css';
import { addFavourites,removeFavourites} from '../actions';
// import data from '../data'

class  MovieCard extends React.Component {
  handleFav=()=>{
    const{movie}=this.props;
   this.props.dispatch(addFavourites(movie));         
  }
  handleUnFav=()=>{
    const{movie}=this.props;
   this.props.dispatch(removeFavourites(movie));         
  }
  render(){
    const{movie}=this.props; 
      return (
       <div className="movie-card">
            <div className="left"> 
             <img className="movie-poster" src={movie.Poster}/>
            </div> 
            <div className="right">
                  <div className="title">{movie.Title}</div>
                  <div className="plot">{movie.Plot}</div>
                  <div className="footer">
                      <div className="rating">{movie.imdbRating}</div>
                      { 
                        this.props.ismovieFav
                        ?<button className="unfavourite-bttn" onClick={this.handleUnFav}>Unfavourite</button>
                        :<button className="favourite-bttn" onClick={this.handleFav}>favourite</button>
                       } 
                  </div>    
            </div>    
        </div>       
   );
  }
}

export default MovieCard;
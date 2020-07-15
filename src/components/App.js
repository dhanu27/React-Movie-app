import React from 'react';
import Reducer from '../reducers'
import '../App.css';
import {data} from '../data';
import Navbar from './Navabar';
import MovieCard from './movie-card';
import {addMovies,changeTab} from '../actions';

class App extends React.Component {
   
    componentDidMount(){
       //make a API call
       const {store}=this.props;
       console.log("store",store);
       store.subscribe(()=>{
        console.log('UPDATED');
           this.forceUpdate();
       })
        store.dispatch(addMovies(data));
       console.log('state',this.props.store.getState());
    }
   isMovieFavourite(movie){
       const index=this.props.store.getState().favourites.indexOf(movie);
       if(index!==-1)
         return true;
       return false;  
   }
   handleTabClick(tab){
    this.props.store.dispatch(changeTab(tab));
   }
  render(){ 
    const {list,showFavourites,favourites}=this.props.store.getState(); 
    const displaymovies= showFavourites?favourites:list;
    console.log('Render',this.props.store.getState());
    return (
        <div className="App">
            <Navbar/>
            <div class="main">
                <div className="tabs"> 
                    
                <div className={`tab ${showFavourites?' ':'active-tabs'}`}   onClick={()=>{this.handleTabClick(false)}}>Movies</div>
                <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>{this.handleTabClick(true)}}>Favourites</div>
            </div> 
                <div className="list">
                    {
                      displaymovies.map((movie,index)=>(
                            <MovieCard movie={movie}
                             key={`movies-${index}`}
                             dispatch={this.props.store.dispatch}
                             ismovieFav={this.isMovieFavourite(movie)} />
                        ))
                    }    
                </div>
               {displaymovies.length===0 ? <div>No Movies to Display !</div>:null}        
            </div>
        </div>
    );
  }
}

export default App;

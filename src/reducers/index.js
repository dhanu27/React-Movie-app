import {ADD_MOVIES ,ADD_FAVOURITE,REMOVE_FAVOURITE,CHANGE_TAB} from '../actions'
const intialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false
}
const removeFavourites =function(movie,fav){
    // let filtered = Array.filter(function(value, index, fav){ return value !== movie;});
    let index = fav.indexOf(movie);
     fav.splice(index, 1);
   return fav;
}
export default function movies(state=intialMoviesState,action){ 
    switch (action.type){
        case ADD_MOVIES :
             return {
                ...state,
             list:action.movies
             }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie ,...state.favourites]
            }
        case REMOVE_FAVOURITE:
             return{
                ...state,
                favourites: removeFavourites(action.movie ,state.favourites)  
            }
        case CHANGE_TAB:
              return {
                  ...state,
                   showFavourites:action.tab 
              }        
        default:
            return state
    } 
}

//  {
    // type:"ADD_MOVIES",
    // movies:['m1','m2','m3']
// }
// action types
export  const ADD_MOVIES='ADD_MOVIES'
export  const ADD_FAVOURITE='ADD_FAVOURITE'
export  const REMOVE_FAVOURITE='REMOVE_FAVOURITE'
export  const CHANGE_TAB='CHANGE_TAB'
// action creators
export function addMovies(movies){
   return { 
    type:ADD_MOVIES,
    movies
   }
}
export function addFavourites(movie){
      return {
          type:ADD_FAVOURITE,
          movie
      }
}
export function removeFavourites(movie){
    return {
        type:REMOVE_FAVOURITE,
        movie
    }
}
export function changeTab(tab){
    return {
        type:CHANGE_TAB,
        tab
    }
}
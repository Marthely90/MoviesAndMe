const initialState = {
    historicFilms: []
  }
  
  function manageHistoricFilms(state = initialState, action) {
    let newstate
    switch(action.type){
      case 'TOGGLE_FILMDETAIL':
        const FilmAlreadyIn = state.historicFilms.findIndex(item => item.id === action.value.id)
        if (FilmAlreadyIn === -1) {
          newstate = {
            ...state,
            historicFilms: [...state.historicFilms, action.value]
          }
        }
        return newstate || state
  
      case 'REMOVE_HISTORIC_FILM':
        newstate = {
          ...state,
          historicFilms: state.historicFilms.filter(item => item.id !== action.value.id)
        }
        return newstate
  
      case 'RESET_HISTORIC':
        newstate = {
          ...state,
          historicFilms: []
        }
        return newstate
    }
    return state
  }
  
  export default manageHistoricFilms
  
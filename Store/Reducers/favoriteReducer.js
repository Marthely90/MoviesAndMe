const initialState = { favoritesFilm: []}
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

function toggleFavorite(state = initialState, action){
    let nextState
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
            if (favoriteFilmIndex === -1) {
                // Le film n'est pas dans les films favoris, on l'ajoute à la liste
                nextState = {
                    ...state,
                    favoritesFilm: [...state.favoritesFilm, action.value]
                    }
            }
            else {
                // Le film est déjà dans les favoris, on le supprime de la liste
                nextState = {
                ...state,
                favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
                }
            }
            return nextState || state
    
        default:
            return state
    }
}

export default toggleFavorite
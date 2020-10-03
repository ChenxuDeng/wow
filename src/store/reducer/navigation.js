import * as actionType from '../action/actionTypes'

const initialState={
    game:false,
    esports:false,
    login:false,
    leftDrawer:false,
    rightDrawerGames:false,
    rightDrawerEsports:false,
    rightDrawer:false,
    scrolled:false,
    secondaryDropdown:false,
    clickAway:false,
    gameHover:false,
    searchDropdown:false
}

const navigation=(state=initialState,action)=>{
    switch (action.type) {
        case (actionType.OPEN_GAME):
            return {
                ...state,
                game:!state.game,
                esports:false,
                login:false
            }
        case (actionType.CLOSE_GAME):
            return {
                ...state,
                game:false
            }
        case (actionType.OPEN_ESPORTS):
            return {
                ...state,
                esports:!state.esports,
                game:false,
                login:false
            }
        case (actionType.CLOSE_ESPORTS):
            return {
                ...state,
                esports:false
            }
        case (actionType.OPEN_LOGIN):
            return {
                ...state,
                login:!state.login,
                esports:false,
                game:false
            }
        case (actionType.CLOSE_LOGIN):
            return {
                ...state,
                login:false
            }
        case (actionType.OPEN_LEFT_DRAWER):
            return {
                ...state,
                leftDrawer:true
            }
        case (actionType.CLOSE_LEFT_DRAWER):
            return {
                ...state,
                leftDrawer:false
            }
        case (actionType.OPEN_RIGHT_DRAWER_GAMES):
            return {
                ...state,
                rightDrawerGames:!state.rightDrawerGames
            }
        case (actionType.OPEN_RIGHT_DRAWER_ESPORTS):
            return {
                ...state,
                rightDrawerEsports:!state.rightDrawerEsports
            }
        case (actionType.OPEN_RIGHT_DRAWER):
            return {
                ...state,
                rightDrawer:true
            }
        case (actionType.CLOSE_RIGHT_DRAWER):
            return {
                ...state,
                rightDrawer:false
            }
        case (actionType.SCROLL_UP):
            return {
                ...state,
                scrolled: true,
                game:false,
                esports:false,
                login:false
            }
        case (actionType.SCROLL_DOWN):
            return {
                ...state,
                scrolled: false
            }
        case (actionType.OPEN_SECONDARY_DROPDOWN):
            return {
                ...state,
                clickAway:false,
                secondaryDropdown:!state.secondaryDropdown,
                searchDropdown:false
            }
        case (actionType.CLOSE_SECONDARY_DROPDOWN):
            return {
                ...state,
                clickAway:false,
                secondaryDropdown:false

            }
        case (actionType.CLICKAWAY):
            return {
                ...state,
                clickAway:true
            }
        case (actionType.GAME_MOUSEOVER):
            return {
                ...state,
                gameHover:true
            }
        case (actionType.GAME_MOUSELEAVE):
            return {
                ...state,
                gameHover:false
            }
        case (actionType.OPEN_SEARCH_DROPDOWN):
            return {
                ...state,
                searchDropdown:!state.searchDropdown,
                secondaryDropdown:false
            }
        case (actionType.CLOSE_SEARCH_DROPDOWN):
            return {
                ...state,
                searchDropdown:false
            }
        default:
            return state
    }
}

export default navigation
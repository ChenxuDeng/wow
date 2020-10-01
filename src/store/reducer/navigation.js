import * as actionType from '../action/actionTypes'

const initialState={
    game:false,
    esports:false,
    login:false,
    leftDrawer:false,
    rightDrawerGames:false,
    rightDrawerEsports:false,
    rightDrawer:false,
    scrolled:false
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
                scrolled: true
            }
        case (actionType.SCROLL_DOWN):
            return {
                ...state,
                scrolled: false
            }
        default:
            return state
    }
}

export default navigation
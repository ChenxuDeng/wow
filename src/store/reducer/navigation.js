import * as actionType from '../action/actionTypes'

const initialState={
    game:false,
    esports:false,
    login:false
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
        default:
            return state
    }
}

export default navigation
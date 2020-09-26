import * as actionType from './actionTypes'

export const openGame=()=>{
    return{
        type:actionType.OPEN_GAME
    }
}

export const closeGame=()=>{
    return{
        type:actionType.CLOSE_GAME
    }
}

export const openEsports=()=>{
    return{
        type:actionType.OPEN_ESPORTS
    }
}

export const closeEsports=()=>{
    return{
        type:actionType.CLOSE_ESPORTS
    }
}

export const openLogin=()=>{
    return{
        type:actionType.OPEN_LOGIN
    }
}

export const closeLogin=()=>{
    return{
        type:actionType.CLOSE_LOGIN
    }
}
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

export const openLeftDrawer=()=>{
    return{
        type:actionType.OPEN_LEFT_DRAWER
    }
}

export const closeLeftDrawer=()=>{
    return{
        type:actionType.CLOSE_LEFT_DRAWER
    }
}

export const openRightDrawerGames=()=>{
    return{
        type:actionType.OPEN_RIGHT_DRAWER_GAMES
    }
}

export const openRightDrawerEsports=()=>{
    return{
        type:actionType.OPEN_RIGHT_DRAWER_ESPORTS
    }
}

export const openRightDrawer=()=>{
    return{
        type:actionType.OPEN_RIGHT_DRAWER
    }
}

export const closeRightDrawer=()=>{
    return{
        type:actionType.CLOSE_RIGHT_DRAWER
    }
}

export const scrollUp=()=>{
    return{
        type:actionType.SCROLL_UP
    }
}

export const scrollDown=()=>{
    return{
        type:actionType.SCROLL_DOWN
    }
}

export const openSecondaryDropdown=()=>{
    return{
        type:actionType.OPEN_SECONDARY_DROPDOWN
    }
}

export const closeSecondaryDropdown=()=>{
    return{
        type:actionType.CLOSE_SECONDARY_DROPDOWN
    }
}

export const clickAway=()=>{
    return{
        type:actionType.CLICKAWAY
    }
}
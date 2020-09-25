import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const black='#000'
const grey='rgba(255, 255, 255, 0.7)'

export const theme=createMuiTheme({
    palette:{
        common:{
            black:black,
            grey:grey
        },
        primary:{
            main:black
        },
        secondary:{
            main:grey
        }
    }
})
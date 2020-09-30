import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const black='#0b0d12'
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
    },
    breakpoints:{
        values:{
            xs: 0,
            sm: 600,
            sl: 720,
            md: 960,
            custom: 1080,
            lg: 1280,
            xl: 1920,
        }
    }
})
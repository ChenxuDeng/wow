import Navigation from "./components/navigation/navigation";
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from './theme/theme'
import MainPage from "./components/mainPage/mainPage";
import * as action from './store/action/index'
import {connect} from 'react-redux'
import React, {Component} from 'react';

class App extends Component {
    componentDidMount() {
        this.prev=window.scrollY
        window.addEventListener('scroll',(event)=>this.scrollHandler(event))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',(event)=>this.scrollHandler(event))
    }

    scrollHandler=(event)=>{
        const window = event.currentTarget;
        if(window.scrollY>0){
            this.props.scrollUp()
        }else if(window.scrollY===0){
            this.props.scrollDown()
        }
        this.prev = window.scrollY;
    }

    render() {
        return (
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                    <Navigation/>
                    <MainPage/>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        scrollUp:()=>{dispatch(action.scrollUp())},
        scrollDown:()=>{dispatch(action.scrollDown())}
    }
}

export default connect(null,mapDispatchToProps)(App);

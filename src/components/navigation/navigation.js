import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import blizzardLogo from '../../assets/blizzard.svg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ow from '../../assets/ow.png'
import wow from '../../assets/wow.png'
import hs from '../../assets/hs.png'
import heroes from '../../assets/heroes.png'
import w3r from '../../assets/w3r.png'
import di from '../../assets/di.png'
import d3 from '../../assets/d3.png'
import sc2 from '../../assets/sc2.png'
import scr from '../../assets/scr.png'
import Divider from "@material-ui/core/Divider";
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import * as action from '../../store/action/index'
import {connect} from 'react-redux'
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import esportsHs from '../../assets/esports-hs.png'
import esportsOw from '../../assets/esports-ow.png'
import esportsSc2 from '../../assets/esports-sc2.png'
import esportsW3r from '../../assets/esports-w3r.png'
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Backdrop from "@material-ui/core/Backdrop";
import SettingsIcon from '@material-ui/icons/Settings';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function Navigation(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            '@keyframes slide': {
                "0%": {
                    opacity: 0,
                    transform: "translateY(-20px)"
                },
                "100%": {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            },
            toolBar:theme.mixins.toolbar,
            toolbar:{
                padding:'0 40px'
            },
            regular:{
                minHeight:'40px'
            },
            blizzardLogo:{
                width:'62px'
            },
            tab:{
                fontSize:'15px',
                color:theme.palette.common.grey,
                minWidth:'46px',
                '&:hover':{
                    color:'white'
                },
                marginRight:'10px'
            },
            tabSelected:{
                fontSize:'15px',
                color:'white',
                minWidth:'46px',
                marginRight:'10px'
            },
            gameTab:{
                fontSize:'15px',
                color:'white',
                minWidth:'46px',
                '&:hover':{
                    color:'white'
                },
                marginRight:'10px'
            },
            paper:{
                width:'100%',
                position:'absolute',
                top:'40px',
                borderRadius:'0',
                height:'222px',
                background:'radial-gradient(ellipse farthest-side at center top,#283244 0,rgba(21,26,35,.95) 100%)',
                border:'1px solid rgba(255,255,255,.15)',
                borderLeft:'0',
                borderRight:'0',
                boxShadow:'0 8px 17px 0 rgba(0,0,0,.2)'
            },
            navImg:{
                height:'64px',
                width:'64px'
            },
            navListItem:{
                padding:'0 60px',
                justifyContent:'space-between',
                height:'170px',
                marginTop:'-6px'
            },
            button:{
                '&:hover':{
                    background:'transparent',
                    filter:'brightness(1.2)',
                    color:'white'
                },
                color:'rgba(255, 255, 255, 0.7)'
            },
            gameButtonText:{
                fontSize:'12px'
            },
            textOffset:{
                fontSize:'12px',
                marginTop:'-5px'
            },
            textOffsetSpecial:{
                fontSize:'12px',
                marginTop:'-3px',
                position:'absolute'
            },
            ow:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.05s',
                animationFillMode:'backwards'
            },
            wow:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.1s',
                animationFillMode:'backwards'
            },
            hs:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.15s',
                animationFillMode:'backwards'
            },
            heroes:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.2s',
                animationFillMode:'backwards'
            },
            w3r:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.25s',
                animationFillMode:'backwards'
            },
            di:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.3s',
                animationFillMode:'backwards'
            },
            d3:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.35s',
                animationFillMode:'backwards'
            },
            sc2:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.4s',
                animationFillMode:'backwards'
            },
            scr:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.45s',
                animationFillMode:'backwards'
            },
            bottomButton:{
                animation: `$slide 0.2s ${theme.transitions.easing.easeOut}`,
                animationDelay:'0.5s',
                animationFillMode:'backwards'
            },
            loginButton:{
                background:'#006fb2',
                border:'1px solid #00aeff',
                fontSize:'16px',
                width:'278px',
                padding:'0 50px',
                height:'38px',
                borderRadius:'0',
                color:'white',
                '&:hover':{
                    filter:'brightness(1.1)',
                    background:'#006fb2'
                },
                transition:'0.2s'
            },
            loginSubButton:{
                color:'rgba(255, 255, 255, 0.7)',
                fontSize:'16px',
                '&:hover':{
                    color:'white',
                    filter:'brightness(1.1)',
                    background:'transparent'
                },
                transition:'0.2s'
            }
        }
    })
    const classes=useStyle()

    const login=<React.Fragment>
        <Backdrop open={props.login}>
            <ClickAwayListener onClickAway={props.closeLogin}>
                <Paper className={classes.paper} style={{right:'20px',width:'320px',height:'168px'}}>
                    <List style={{padding:'0'}}>
                        <ListItem style={{justifyContent:'center',height:'78px'}}>
                            <Button className={classes.loginButton} disableRipple>
                                登录
                            </Button>
                        </ListItem>
                        <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                        <ListItem style={{height:'44px',alignItems:'center'}} button disableRipple className={classes.loginSubButton}>
                            <SettingsIcon style={{width:'19px',marginRight:'5px',marginLeft:'6px',marginBottom:'-2.5px',color:'#00aeff'}}/>
                            <div>账户</div>
                        </ListItem>
                        <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                        <ListItem style={{height:'44px',alignItems:'center'}} button disableRipple className={classes.loginSubButton}>
                            <PersonAddIcon style={{width:'22px',marginRight:'5px',marginLeft:'3px',marginBottom:'-2.5px',color:'#00aeff'}}/>
                            <div>免费注册</div>
                        </ListItem>
                    </List>
                </Paper>
            </ClickAwayListener>
        </Backdrop>
    </React.Fragment>

    const esportsDropdown=<React.Fragment>
        <Backdrop open={props.esports}>
        <ClickAwayListener onClickAway={props.closeEsports}>
                <Paper className={classes.paper} style={{height:'327px'}}>
                    <List>
                        <ListItem style={{height:'275px',justifyContent:'center',marginTop:'-20px'}}>
                            <Button className={[classes.button,classes.ow]} style={{fontSize:'13px',padding:'0'}} disableRipple>
                                <div>
                                    <img src={esportsOw} alt='esportsOw'/>
                                    <div style={{marginTop:'-3px'}}>
                                        守望先锋电竞官网
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.wow]} style={{fontSize:'13px',padding:'0'}} disableRipple>
                                <div>
                                    <img src={esportsHs} alt='esportsHs' style={{height:'192px',width:'192px'}}/>
                                    <div style={{marginTop:'-3px'}}>
                                        炉石传说黄金系列赛
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.hs]} style={{fontSize:'13px',padding:'0'}} disableRipple>
                                <div>
                                    <img src={esportsSc2} alt='esportsSc2'/>
                                    <div style={{marginTop:'-3px'}}>
                                        星际争霸II黄金职业联赛
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.heroes]} style={{fontSize:'13px',padding:'0'}} disableRipple>
                                <div>
                                    <img src={esportsW3r} alt='esportsW3r'/>
                                    <div style={{marginTop:'-3px'}}>
                                        魔兽争霸III黄金联赛
                                    </div>
                                </div>
                            </Button>
                        </ListItem>
                        <Divider style={{background:'rgba(255,255,255,.08)',marginTop:'14px'}}/>
                        <ListItem style={{height:'50px',justifyContent:'center'}}>
                            <Button className={[classes.button,classes.w3r]} style={{marginRight:'30px',fontSize:'15px'}} disableRipple>
                                <ViewModuleIcon style={{marginRight:'3px',width:'25px',color:'#00aeff'}}/>
                                更多赛事
                            </Button>
                            <Button className={[classes.button,classes.w3r]} disableRipple style={{fontSize:'15px'}}>
                                <LocalActivityIcon style={{marginRight:'3px',width:'20px',color:'#00aeff'}}/>
                                申请暴雪电竞赛事授权
                            </Button>
                        </ListItem>
                    </List>
                </Paper>
        </ClickAwayListener>
        </Backdrop>
    </React.Fragment>

    const gameDropdown=<React.Fragment>
        <Backdrop open={props.game}>
            <ClickAwayListener onClickAway={props.closeGame}>
                <Paper className={classes.paper} elevation={0}>
                    <List style={{padding:'0'}}>
                        <ListItem className={classes.navListItem}>
                            <Button className={[classes.button,classes.ow]} style={{padding:'0'}} disableRipple>
                                <div style={{width:'104px',textAlign:'center'}}>
                                    <img src={ow} alt='ow' className={classes.navImg}/>
                                    <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                        <span className={classes.gameButtonText}>守望先锋</span>
                                        <div className={classes.textOffset}>®</div>
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.wow]} style={{padding:'0'}} disableRipple>
                                <div style={{width:'104px',textAlign:'center'}}>
                                    <img src={wow} alt='wow' className={classes.navImg}/>
                                    <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                        <span className={classes.gameButtonText}>魔兽世界</span>
                                        <div className={classes.textOffset}>®</div>
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.hs]} style={{padding:'0'}} disableRipple>
                                <div style={{width:'104px',textAlign:'center'}}>
                                    <img src={hs} alt='hs' className={classes.navImg}/>
                                    <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                        <span className={classes.gameButtonText}>炉石传说</span>
                                        <div className={classes.textOffset}>®</div>
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.heroes]} style={{padding:'0'}} disableRipple>
                                <div style={{width:'104px',textAlign:'center'}}>
                                    <img src={heroes} alt='heroes' className={classes.navImg}/>
                                    <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                        <span className={classes.gameButtonText}>风暴英雄</span>
                                        <div className={classes.gameButtonText}>™</div>
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.w3r]} style={{padding:'0',marginBottom:'-16px'}} disableRipple>
                                <div style={{width:'104px',textAlign:'center'}}>
                                    <img src={w3r} alt='w3r' className={classes.navImg}/>
                                    <div style={{marginTop:'-7px',justifyContent:'center',lineHeight:'1.4'}}>
                                        <span className={classes.gameButtonText}>魔兽争霸</span>
                                        <span className={classes.textOffsetSpecial}>®</span>
                                        <span className={classes.gameButtonText}>&nbsp;&nbsp;&nbsp;III：重制版</span>
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.di]} style={{padding:'0',marginBottom:'-16px'}} disableRipple>
                                <div style={{width:'104px',textAlign:'center'}}>
                                    <img src={di} alt='di' className={classes.navImg}/>
                                    <div style={{marginTop:'-7px',justifyContent:'center',lineHeight:'1.4'}}>
                                        <span className={classes.gameButtonText}>暗黑破坏神</span>
                                        <span className={classes.textOffsetSpecial}>®</span>
                                        <span className={classes.gameButtonText}>&nbsp;&nbsp;&nbsp;：不朽</span>
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.d3]} style={{padding:'0',marginTop:'-4px'}} disableRipple>
                                <div style={{width:'104px',textAlign:'center'}}>
                                    <img src={d3} alt='d3' className={classes.navImg}/>
                                    <div style={{marginTop:'-7px',justifyContent:'center',lineHeight:'1.4'}}>
                                        <span className={classes.gameButtonText}>暗黑破坏神</span>
                                        <span className={classes.textOffsetSpecial}>®</span>
                                        <span className={classes.gameButtonText}>&nbsp;&nbsp;&nbsp;III</span>
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.sc2]} style={{padding:'0',marginTop:'-4px'}} disableRipple>
                                <div style={{width:'104px',textAlign:'center'}}>
                                    <img src={sc2} alt='sc2' className={classes.navImg}/>
                                    <div style={{marginTop:'-7px',justifyContent:'center',lineHeight:'1.4'}}>
                                        <span className={classes.gameButtonText}>星际争霸</span>
                                        <span className={classes.textOffsetSpecial}>®</span>
                                        <span className={classes.gameButtonText}>&nbsp;&nbsp;&nbsp;II</span>
                                    </div>
                                </div>
                            </Button>
                            <Button className={[classes.button,classes.scr]} style={{padding:'0',marginBottom:'-16px'}} disableRipple>
                                <div style={{width:'104px',textAlign:'center'}}>
                                    <img src={scr} alt='scr' className={classes.navImg}/>
                                    <div style={{marginTop:'-7px',justifyContent:'center',lineHeight:'1.4'}}>
                                        <span className={classes.gameButtonText}>星际争霸</span>
                                        <span className={classes.textOffsetSpecial}>®</span>
                                        <span className={classes.gameButtonText}>&nbsp;&nbsp;&nbsp;：重制版</span>
                                    </div>
                                </div>
                            </Button>
                        </ListItem>
                        <Divider style={{background:'rgba(255,255,255,.08)',marginTop:'8px'}}/>
                        <ListItem style={{height:'50px',justifyContent:'center'}}>
                            <Button className={[classes.button,classes.bottomButton]} disableRipple style={{fontSize:'15px'}}>
                                <ViewModuleIcon style={{marginRight:'3px',color:'#00aeff'}}/>
                                更多游戏
                            </Button>
                            <Button className={[classes.button,classes.bottomButton]} style={{margin:'0 30px',fontSize:'15px'}} disableRipple>
                                <SystemUpdateAltIcon style={{marginRight:'3px',width:'20px',color:'#00aeff'}}/>
                                下载
                            </Button>
                            <Button className={[classes.button,classes.bottomButton]} disableRipple style={{fontSize:'15px'}}>
                                <ChatBubbleOutlineIcon style={{marginRight:'3px',width:'20px',marginBottom:'-2px',color:'#00aeff'}}/>
                                游戏论坛
                            </Button>
                        </ListItem>
                    </List>
                </Paper>
            </ClickAwayListener>
        </Backdrop>
    </React.Fragment>

    return (
        <React.Fragment>
            <AppBar style={{height:'40px'}} elevation={0}>
                <Toolbar classes={{gutters:classes.toolbar,regular:classes.regular}} style={{minHeight:'40px'}}>
                    <img src={blizzardLogo} alt='blizzardLogo' className={classes.blizzardLogo}/>
                    <div style={{marginLeft:'20px',display:'flex'}}>
                        <Button
                             className={props.esports || props.login?classes.tab:classes.gameTab}
                             disableRipple
                             onClick={props.openGame}
                        >
                            游戏
                            {props.game?<KeyboardArrowUpIcon style={{width: '20px'}}/>:<ExpandMoreIcon style={{width: '20px'}}/>}
                        </Button>
                        <Button className={classes.tab} disableRipple>
                            商城
                        </Button>
                        <Button className={classes.tab} disableRipple style={{marginLeft:'4px'}}>
                            新闻
                        </Button>
                        <Button className={props.esports?classes.tabSelected:classes.tab}
                                style={{marginLeft:'2px'}}
                                disableRipple
                                onClick={props.openEsports}
                                >
                            电子竞技
                            {props.esports?<KeyboardArrowUpIcon style={{width: '20px'}}/>:<ExpandMoreIcon style={{width: '20px'}}/>}
                        </Button>
                    </div>
                    <div style={{display:'flex',marginLeft:'auto'}}>
                        <Button className={classes.tab} disableRipple>
                            支持
                        </Button>
                        <Button
                            className={props.login?classes.tabSelected:classes.tab}
                            style={{margin:'0',padding:'6px 0',marginLeft:'10px'}}
                            disableRipple
                            onClick={props.openLogin}
                        >
                            我的账户
                            <ExpandMoreIcon style={{width:'20px'}}/>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            {props.game?gameDropdown:null}
            {props.esports?esportsDropdown:null}
            {props.login?login:null}
            <div className={classes.toolBar}/>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        game:state.navigation.game,
        esports:state.navigation.esports,
        login:state.navigation.login
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        openGame:()=>{dispatch(action.openGame())},
        closeGame:()=>{dispatch(action.closeGame())},
        openEsports:()=>{dispatch(action.openEsports())},
        closeEsports:()=>{dispatch(action.closeEsports())},
        openLogin:()=>{dispatch(action.openLogin())},
        closeLogin:()=>{dispatch(action.closeLogin())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
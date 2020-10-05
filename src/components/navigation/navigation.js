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
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import smLogo from '../../assets/smLogo.png'
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import leftDrawerLogo from '../../assets/leftDrawerLogo.png'
import InputBase from "@material-ui/core/InputBase";
import searchIcon from '../../assets/icon-searchb9c97e.png'
import leftDrawerButton from '../../assets/leftDrawerButton.jpg'
import blizzardLeft from '../../assets/blizzardLeft.svg'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Container from "@material-ui/core/Container";

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
                padding:'0'
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
            },
            leftDrawer:{
                width:'320px',
                background:'#211510',
                borderRight:'1px solid #352011'
            },
            inputPaper:{
                background:'#000',
                borderTop:'1px solid #352011',
                borderBottom:'1px solid #352011',
                width:'100%',
                color:'#fff',
                fontSize:'12px',
                borderRadius:'0',
                height:'46px',
                paddingLeft:'15px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            },
            inputBase:{
                width:'100%',
                color:'#fff',
                fontSize:'14px'
            },
            placeHolder:{
                '&::placeholder': {
                    color: '#f8b700',
                    fontStyle:'italic',
                    opacity:'0.9',
                    fontSize:'12px'
                }
            },
            leftDrawerText:{
                fontSize:'14px',
                color:'#f8b700',
                backgroundImage:'-webkit-linear-gradient(top,#efd100,#e2a233 19%,#f0c328 30%,#fff1a3 43%,#ffe13e 50%,#fff 51%,#fff)',
                backgroundSize:'1em 2em',
                WebkitTextFillColor:'transparent',
                WebkitBackgroundClip:'text',
                marginLeft:'9px',
                lineHeight:'1em'
            },
            leftDrawerButton:{
                padding:'0',
                height:'67px',
                backgroundImage:`url(${leftDrawerButton})`,
                backgroundPosition:'left',
                backgroundSize:'cover',
                '&:before':{
                    background:'rgba(179,61,38,.5)',
                    height:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    right:'0',
                    top:'0'
                },
                '&:after':{
                    background:'rgba(135,43,25,.5)',
                    height:'1px',
                    content:'" "',
                    position:'absolute',
                    bottom:'0',
                    left:'0',
                    right:'0'
                },
                marginTop:'30px',
                cursor:'pointer',
                justifyContent:'center'
            },
            iconButton:{
                paddingLeft:'0'
            },
            rightDrawer:{
                width:'320px',
                background:'#151a23',
                overflowX:'hidden'
            },
            rightDrawerGames:{
                height:'0',
                overflow:'hidden',
                transition:'0.2s'
            },
            rightDrawerGamesExpanded:{
                height:'448px',
                transition:'0.2s',
                overflow:'hidden'
            },
            rightDrawerEsports:{
                height:'0',
                overflow:'hidden',
                transition:'0.2s'
            },
            rightDrawerEsportsExpanded:{
                height:'228px',
                overflow:'hidden',
                transition:'0.2s'
            },
            container:{
                padding:'0 40px',
                maxWidth:'1600px',
                [theme.breakpoints.down('sm')]:{
                    padding:'0'
                }
            },
            appBar:{
                position:'relative',
                [theme.breakpoints.down('sm')]:{
                    position:'fixed'
                }
            }
        }
    })
    const classes=useStyle()

    const theme=useTheme()
    const smMatch=useMediaQuery(theme.breakpoints.down('sm'))

    const rightDrawerEsports=<React.Fragment>
        <div className={props.rightDrawerEsports?classes.rightDrawerEsportsExpanded:classes.rightDrawerEsports}>
            <Divider style={{background:'rgba(255,255,255,.08)'}}/>
            <ListItem style={{padding:'7px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={esportsOw} alt='esportsOw' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>守望先锋电竞官网</span>
            </ListItem>
            <ListItem style={{padding:'7px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={esportsHs} alt='esportsHs' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>炉石传说黄金系列赛</span>
            </ListItem>
            <ListItem style={{padding:'7px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={esportsSc2} alt='esportsOw' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>星际争霸II黄金职业联赛</span>
            </ListItem>
            <ListItem style={{padding:'7px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={esportsW3r} alt='esportsW3r' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>魔兽争霸III黄金联赛</span>
            </ListItem>
            <ListItem style={{cursor:'pointer',background:'#13171f',marginLeft:'3px'}}>
                <ViewModuleIcon style={{marginRight:'3.5px',color:'#00aeff',width:'26px'}}/>
                <span style={{fontSize:'14px',fontWeight:'400',color:'rgba(255,255,255,.7)',marginTop:'-2px'}}>更多赛事</span>
            </ListItem>
            <ListItem style={{cursor:'pointer',background:'#13171f',marginLeft:'5px'}}>
                <LocalActivityIcon style={{marginRight:'3px',color:'#00aeff'}}/>
                <span style={{fontSize:'14px',fontWeight:'400',color:'rgba(255,255,255,.7)',marginTop:'-2px'}}>申请暴雪电竞赛事授权</span>
            </ListItem>
        </div>
    </React.Fragment>

    const rightDrawerGames=<React.Fragment>
        <div className={props.rightDrawerGames?classes.rightDrawerGamesExpanded:classes.rightDrawerGames}>
            <Divider style={{background:'rgba(255,255,255,.08)'}}/>
            <ListItem style={{padding:'7px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={ow} alt='ow' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>守望先锋</span>
                <div className={classes.textOffset} style={{fontSize:'14px',marginLeft:'-2px'}}>®</div>
            </ListItem>
            <ListItem style={{padding:'6px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={wow} alt='wow' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>魔兽世界</span>
                <div className={classes.textOffset} style={{fontSize:'14px',marginLeft:'-2px'}}>®</div>
            </ListItem>
            <ListItem style={{padding:'6px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={hs} alt='hs' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>炉石传说</span>
                <div className={classes.textOffset} style={{fontSize:'14px',marginLeft:'-2px'}}>®</div>
            </ListItem>
            <ListItem style={{padding:'6px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={heroes} alt='heroes' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>风暴英雄</span>
                <div className={classes.textOffset} style={{fontSize:'14px',marginLeft:'-2px'}}>™</div>
            </ListItem>
            <ListItem style={{padding:'6px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={w3r} alt='w3r' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>魔兽争霸</span>
                <div className={classes.textOffset} style={{fontSize:'14px',marginLeft:'-2px'}}>®</div>
                <span style={{fontSize:'14px',fontWeight:'400'}}>III：重置版</span>
            </ListItem>
            <ListItem style={{padding:'6px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={di} alt='di' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>暗黑破坏神</span>
                <div className={classes.textOffset} style={{fontSize:'14px',marginLeft:'-2px'}}>®</div>
                <span style={{fontSize:'14px',fontWeight:'400'}}>：不朽</span>
            </ListItem>
            <ListItem style={{padding:'6px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={d3} alt='d3' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>暗黑破坏神</span>
                <div className={classes.textOffset} style={{fontSize:'14px',marginLeft:'-2px'}}>®</div>
                <span style={{fontSize:'14px',fontWeight:'400'}}>III</span>
            </ListItem>
            <ListItem style={{padding:'6px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={sc2} alt='sc2' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>星际争霸</span>
                <div className={classes.textOffset} style={{fontSize:'14px',marginLeft:'-2px'}}>®</div>
                <span style={{fontSize:'14px',fontWeight:'400'}}>II</span>
            </ListItem>
            <ListItem style={{padding:'6px 20px',background:'#13171f',color:'rgba(255,255,255,.7)',cursor:'pointer'}}>
                <img src={scr} alt='scr' style={{width:'24px',marginRight:'5px'}}/>
                <span className={classes.gameButtonText} style={{fontSize:'14px',fontWeight:'400'}}>星际争霸</span>
                <div className={classes.textOffset} style={{fontSize:'14px',marginLeft:'-2px'}}>®</div>
                <span style={{fontSize:'14px',fontWeight:'400'}}>：重置版</span>
            </ListItem>
            <Divider style={{background:'rgba(255,255,255,.08)'}}/>
            <ListItem style={{cursor:'pointer'}}>
                <ViewModuleIcon style={{marginRight:'3px',color:'#00aeff'}}/>
                <span style={{fontSize:'14px',fontWeight:'400',color:'rgba(255,255,255,.7)',marginTop:'-2px'}}>更多游戏</span>
            </ListItem>
            <ListItem style={{cursor:'pointer'}}>
                <SystemUpdateAltIcon style={{marginRight:'3px',color:'#00aeff',width:'20px',marginLeft:'3px'}}/>
                <span style={{fontSize:'14px',fontWeight:'400',color:'rgba(255,255,255,.7)',marginTop:'-2px'}}>下载</span>
            </ListItem>
            <ListItem style={{cursor:'pointer'}}>
                <ChatBubbleOutlineIcon style={{marginRight:'3px',color:'#00aeff',width:'20px',marginLeft:'3px'}}/>
                <span style={{fontSize:'14px',fontWeight:'400',color:'rgba(255,255,255,.7)',marginTop:'-2px'}}>游戏论坛</span>
            </ListItem>
        </div>
    </React.Fragment>

    const smNav=<React.Fragment>
        <Toolbar classes={{regular:classes.regular}}
                 style={{
                     minHeight:'48px',
                     padding:'0 10px',
                     background:'linear-gradient(180deg,#261812 0,#1a0f0b)',
                     justifyContent:'space-between',
                     borderBottom:'1px solid #352011',
                     boxShadow:'0 0 10px rgba(0,0,0,.6)'
                 }}
        >
            <IconButton className={classes.iconButton} onClick={props.openLeftDrawer} disableRipple>
                <MenuIcon style={{color:'#f8b700',cursor:'pointer'}}/>
            </IconButton>
            <img src={smLogo} alt='smLogo' style={{width:'35px',height:'35px'}}/>
            <IconButton onClick={props.openRightDrawer} disableRipple style={{paddingRight:'0'}}>
                <PersonOutlineIcon style={{color:'#00aeff',cursor:'pointer'}} />
            </IconButton>
        </Toolbar>
        <SwipeableDrawer open={props.leftDrawer} classes={{paper:classes.leftDrawer}} onClose={props.closeLeftDrawer} onOpen={props.openLeftDrawer} disableScrollLock>
            <List style={{position:'relative'}}>
                <ListItem style={{justifyContent:'center'}}>
                    <img src={leftDrawerLogo} alt='leftDrawerLogo' style={{width:'192px',marginTop:'3px'}}/>
                </ListItem>
                <ListItem disableGutters style={{marginTop:'10px'}}>
                    <Paper className={classes.inputPaper} elevation={0}>
                        <img src={searchIcon} alt='searchIcon' style={{width:'24px',marginRight:'15px'}}/>
                        <InputBase className={classes.inputBase} placeholder={'搜索内容'} inputProps={{className:classes.placeHolder}}/>
                    </Paper>
                </ListItem>
                <ListItem style={{cursor:'pointer',marginTop:'16px'}}>
                    <span className={classes.leftDrawerText}>主页</span>
                </ListItem>
                <ListItem style={{cursor:'pointer',marginTop:'16px'}}>
                    <span className={classes.leftDrawerText}>游戏</span>
                </ListItem>
                <ListItem style={{cursor:'pointer',marginTop:'16px'}}>
                    <span className={classes.leftDrawerText}>新闻</span>
                </ListItem>
                <ListItem style={{cursor:'pointer',marginTop:'16px'}}>
                    <span className={classes.leftDrawerText}>论坛</span>
                </ListItem>
                <ListItem style={{cursor:'pointer',marginTop:'16px'}}>
                    <span className={classes.leftDrawerText}>商城</span>
                </ListItem>
                <ListItem style={{cursor:'pointer',marginTop:'16px'}}>
                    <span className={classes.leftDrawerText}>《魔兽世界》 经典怀旧服</span>
                </ListItem>
                <ListItem style={{cursor:'pointer',marginTop:'16px'}}>
                    <span className={classes.leftDrawerText}>登录</span>
                </ListItem>
                <ListItem className={classes.leftDrawerButton}>
                    <span className={classes.leftDrawerText} style={{marginLeft:'0'}}>免费体验</span>
                </ListItem>
                <ListItem style={{justifyContent:'center',marginTop:'30px'}}>
                    <img src={blizzardLeft} alt='blizzardLeft' style={{width:'62px'}}/>
                </ListItem>
                <CloseIcon style={{position:'absolute',top:'12px',left:'12px',color:'#f8b700',cursor:'pointer'}} onClick={props.closeLeftDrawer}/>
            </List>
        </SwipeableDrawer>
        <SwipeableDrawer open={props.rightDrawer} anchor={'right'} classes={{paper:classes.rightDrawer}} onClose={props.closeRightDrawer} onOpen={props.openRightDrawer} disableScrollLock>
            <List>
                <ListItem style={{justifyContent:'center'}}>
                    <img src={blizzardLogo} alt='blizzardLogo' style={{width:'90px',marginTop:'3px',cursor:'pointer'}}/>
                </ListItem>
                <Divider style={{background:'rgba(255,255,255,.08)',marginTop:'12px'}}/>
                <ListItem style={{justifyContent:'center',height:'78px',background:'#13171f'}}>
                    <Button className={classes.loginButton} disableRipple>
                        登录
                    </Button>
                </ListItem>
                <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                <ListItem style={{height:'44px',alignItems:'center',background:'#13171f'}} button disableRipple className={classes.loginSubButton}>
                    <HelpOutlineIcon style={{width:'19px',marginRight:'5px',marginLeft:'6px',marginBottom:'-2.5px',color:'#00aeff'}}/>
                    <div>支持</div>
                </ListItem>
                <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                <ListItem style={{height:'44px',alignItems:'center',background:'#13171f'}} button disableRipple className={classes.loginSubButton}>
                    <SettingsIcon style={{width:'19px',marginRight:'5px',marginLeft:'6px',marginBottom:'-2.5px',color:'#00aeff'}}/>
                    <div>账户</div>
                </ListItem>
                <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                <ListItem style={{height:'44px',alignItems:'center',background:'#13171f'}} button disableRipple className={classes.loginSubButton}>
                    <PersonAddIcon style={{width:'22px',marginRight:'5px',marginLeft:'3px',marginBottom:'-2.5px',color:'#00aeff'}}/>
                    <div>免费注册</div>
                </ListItem>
                <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                <ListItem style={{height:'44px',alignItems:'center'}} button disableRipple className={classes.loginSubButton}>
                    <span style={{marginLeft:'3px'}}>主页</span>
                </ListItem>
                <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                <ListItem style={{height:'44px',alignItems:'center'}} button disableRipple className={classes.loginSubButton} onClick={props.openRightDrawerGames}>
                    <span style={{marginLeft:'3px'}}>游戏</span>
                    {props.rightDrawerGames?<KeyboardArrowUpIcon/>:<ExpandMoreIcon/>}
                </ListItem>
                {rightDrawerGames}
                <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                <ListItem style={{height:'44px',alignItems:'center'}} button disableRipple className={classes.loginSubButton}>
                    <span style={{marginLeft:'3px'}}>商城</span>
                </ListItem>
                <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                <ListItem style={{height:'44px',alignItems:'center'}} button disableRipple className={classes.loginSubButton}>
                    <span style={{marginLeft:'3px'}}>新闻</span>
                </ListItem>
                <Divider style={{background:'rgba(255,255,255,.08)'}}/>
                <ListItem style={{height:'44px',alignItems:'center'}} button disableRipple className={classes.loginSubButton} onClick={props.openRightDrawerEsports}>
                    <span style={{marginLeft:'3px'}}>电子竞技</span>
                    <ExpandMoreIcon/>
                </ListItem>
                {rightDrawerEsports}
            </List>
            <CloseIcon style={{position:'absolute',top:'12px',right:'12px',color:'#00aeff',cursor:'pointer'}} onClick={props.closeRightDrawer}/>
        </SwipeableDrawer>
    </React.Fragment>

    const lgNav=<React.Fragment>
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
                    {props.login?<KeyboardArrowUpIcon style={{width: '20px'}}/>:<ExpandMoreIcon style={{width: '20px'}}/>}
                </Button>
            </div>
        </Toolbar>
    </React.Fragment>

    const login=<React.Fragment>
        <Backdrop open={props.login} style={{zIndex:'10'}}>
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
        <Backdrop open={props.esports} style={{zIndex:'10'}}>
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
        <Backdrop open={props.game} style={{zIndex: '10'}}>
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
            <AppBar elevation={0} position={'relative'} className={classes.appBar}>
                <Container maxWidth={'lg'} classes={{maxWidthLg:classes.container}}>
                    {smMatch?smNav:lgNav}
                </Container>
            </AppBar>
            {props.game?gameDropdown:null}
            {props.esports?esportsDropdown:null}
            {props.login?login:null}
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        game:state.navigation.game,
        esports:state.navigation.esports,
        login:state.navigation.login,
        leftDrawer:state.navigation.leftDrawer,
        rightDrawerGames:state.navigation.rightDrawerGames,
        rightDrawerEsports:state.navigation.rightDrawerEsports,
        rightDrawer:state.navigation.rightDrawer,
        scrolled:state.navigation.scrolled
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        openGame:()=>{dispatch(action.openGame())},
        closeGame:()=>{dispatch(action.closeGame())},
        openEsports:()=>{dispatch(action.openEsports())},
        closeEsports:()=>{dispatch(action.closeEsports())},
        openLogin:()=>{dispatch(action.openLogin())},
        closeLogin:()=>{dispatch(action.closeLogin())},
        openLeftDrawer:()=>{dispatch(action.openLeftDrawer())},
        closeLeftDrawer:()=>{dispatch(action.closeLeftDrawer())},
        openRightDrawerGames:()=>{dispatch(action.openRightDrawerGames())},
        openRightDrawerEsports:()=>{dispatch(action.openRightDrawerEsports())},
        openRightDrawer:()=>{dispatch(action.openRightDrawer())},
        closeRightDrawer:()=>{dispatch(action.closeRightDrawer())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
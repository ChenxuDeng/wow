import React,{useState} from 'react';
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

function Navigation(props) {
    const useStyle=makeStyles((theme)=>{
        return{
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
            ExpandMoreIcon:{
                color:'#47494d',
                width:'20px'
            },
            ExpandMoreIconHover:{
                color:'rgba(255, 255, 255, 0.7)',
                width:'20px'
            },
            paper:{
                width:'100%',
                position:'absolute',
                top:'40px',
                borderRadius:'0',
                height:'222px',
                background:'radial-gradient(ellipse farthest-side at center top,#283244 0,rgba(21,26,35,.95) 100%)',
                border:'1px solid rgba(255,255,255,.15)',
                boxShadow:'0 8px 17px 0 rgba(0,0,0,.2)'
            },
            navImg:{
                height:'64px',
                width:'64px'
            },
            navListItem:{
                padding:'0 40px',
                marginTop:'20px',
                justifyContent:'space-between'
            },
            button:{
                '&:hover':{
                    background:'transparent'
                }
            }
        }
    })
    const classes=useStyle()
    const [gameButton,setGameButton]=useState(false)
    const [esportButton,setEsportButton]=useState(false)
    const [accountButton,setAccountButton]=useState(false)

    return (
        <React.Fragment>
            <AppBar style={{height:'40px'}}>
                <Toolbar classes={{gutters:classes.toolbar,regular:classes.regular}} style={{minHeight:'40px'}}>
                    <img src={blizzardLogo} alt='blizzardLogo' className={classes.blizzardLogo}/>
                    <div style={{marginLeft:'20px',display:'flex'}}>
                        <Button
                             className={classes.tab}
                             style={{color:'white'}}
                             disableRipple
                             onMouseOver={()=>{setGameButton(true)}}
                             onMouseLeave={()=>{setGameButton(false)}}
                        >
                            游戏
                            <ExpandMoreIcon className={gameButton?classes.ExpandMoreIconHover:classes.ExpandMoreIcon}/>
                        </Button>
                        <Button className={classes.tab} disableRipple>
                            商城
                        </Button>
                        <Button className={classes.tab} disableRipple style={{marginLeft:'4px'}}>
                            新闻
                        </Button>
                        <Button className={classes.tab}
                                style={{marginLeft:'2px'}}
                                disableRipple
                                onMouseOver={()=>{setEsportButton(true)}}
                                onMouseLeave={()=>{setEsportButton(false)}}>
                            电子竞技
                            <ExpandMoreIcon className={esportButton?classes.ExpandMoreIconHover:classes.ExpandMoreIcon}/>
                        </Button>
                    </div>
                    <div style={{display:'flex',marginLeft:'auto'}}>
                        <Button className={classes.tab} disableRipple>
                            支持
                        </Button>
                        <Button
                            className={classes.tab}
                            style={{margin:'0',padding:'6px 0',marginLeft:'10px'}}
                            disableRipple
                            onMouseOver={()=>{setAccountButton(true)}}
                            onMouseLeave={()=>{setAccountButton(false)}}
                        >
                            我的账户
                            <ExpandMoreIcon className={accountButton?classes.ExpandMoreIconHover:classes.ExpandMoreIcon}/>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Paper className={classes.paper} elevation={0}>
                <List>
                    <ListItem className={classes.navListItem}>
                        <Button className={classes.button} style={{padding:'0'}} disableRipple>
                            <div style={{width:'104px',textAlign:'center'}}>
                                <img src={ow} alt='ow' className={classes.navImg}/>
                                <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                    <span style={{fontSize:'12px',color:'rgba(255, 255, 255, 0.7)'}}>守望先锋</span>
                                    <div style={{fontSize:'13px',color:'rgba(255, 255, 255, 0.7)',marginTop:'-6px'}}>®</div>
                                </div>
                            </div>
                        </Button>
                        <Button className={classes.button} style={{padding:'0'}} disableRipple>
                            <div style={{width:'104px',textAlign:'center'}}>
                                <img src={wow} alt='wow' className={classes.navImg}/>
                                <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                    <span style={{fontSize:'12px',color:'rgba(255, 255, 255, 0.7)'}}>魔兽世界</span>
                                    <div style={{fontSize:'13px',color:'rgba(255, 255, 255, 0.7)',marginTop:'-6px'}}>®</div>
                                </div>
                            </div>
                        </Button>
                        <Button className={classes.button} style={{padding:'0'}} disableRipple>
                            <div style={{width:'104px',textAlign:'center'}}>
                                <img src={hs} alt='hs' className={classes.navImg}/>
                                <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                    <span style={{fontSize:'12px',color:'rgba(255, 255, 255, 0.7)'}}>炉石传说</span>
                                    <div style={{fontSize:'13px',color:'rgba(255, 255, 255, 0.7)',marginTop:'-6px'}}>®</div>
                                </div>
                            </div>
                        </Button>
                        <Button className={classes.button} style={{padding:'0'}} disableRipple>
                            <div style={{width:'104px',textAlign:'center'}}>
                                <img src={heroes} alt='heroes' className={classes.navImg}/>
                                <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                    <span style={{fontSize:'12px',color:'rgba(255, 255, 255, 0.7)'}}>风暴英雄</span>
                                    <div style={{fontSize:'13px',color:'rgba(255, 255, 255, 0.7)',marginTop:'-6px'}}>®</div>
                                </div>
                            </div>
                        </Button>
                        <Button className={classes.button} style={{padding:'0'}} disableRipple>
                            <div style={{width:'104px',textAlign:'center'}}>
                                <img src={w3r} alt='w3r' className={classes.navImg}/>
                                <div style={{lineHeight:'1.4'}}>
                                    <span style={{fontSize:'12px',color:'rgba(255, 255, 255, 0.7)'}}>
                                    魔兽争霸<span style={{paddingTop:'-2px',position:'absolute'}}>®</span>III：重制版
                                    </span>
                                </div>
                            </div>
                        </Button>
                        <Button className={classes.button} style={{padding:'0'}} disableRipple>
                            <div style={{width:'104px',textAlign:'center'}}>
                                <img src={di} alt='di' className={classes.navImg}/>
                                <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                    <span style={{fontSize:'12px',color:'rgba(255, 255, 255, 0.7)'}}>守望先锋</span>
                                    <div style={{fontSize:'13px',color:'rgba(255, 255, 255, 0.7)',marginTop:'-6px'}}>®</div>
                                </div>
                            </div>
                        </Button>
                        <Button className={classes.button} style={{padding:'0'}} disableRipple>
                            <div style={{width:'104px',textAlign:'center'}}>
                                <img src={d3} alt='d3' className={classes.navImg}/>
                                <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                    <span style={{fontSize:'12px',color:'rgba(255, 255, 255, 0.7)'}}>守望先锋</span>
                                    <div style={{fontSize:'13px',color:'rgba(255, 255, 255, 0.7)',marginTop:'-6px'}}>®</div>
                                </div>
                            </div>
                        </Button>
                        <Button className={classes.button} style={{padding:'0'}} disableRipple>
                            <div style={{width:'104px',textAlign:'center'}}>
                                <img src={sc2} alt='sc2' className={classes.navImg}/>
                                <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                    <span style={{fontSize:'12px',color:'rgba(255, 255, 255, 0.7)'}}>守望先锋</span>
                                    <div style={{fontSize:'13px',color:'rgba(255, 255, 255, 0.7)',marginTop:'-6px'}}>®</div>
                                </div>
                            </div>
                        </Button>
                        <Button className={classes.button} style={{padding:'0'}} disableRipple>
                            <div style={{width:'104px',textAlign:'center'}}>
                                <img src={scr} alt='scr' className={classes.navImg}/>
                                <div style={{marginTop:'-7px',display:'flex',justifyContent:'center'}}>
                                    <span style={{fontSize:'12px',color:'rgba(255, 255, 255, 0.7)'}}>守望先锋</span>
                                    <div style={{fontSize:'13px',color:'rgba(255, 255, 255, 0.7)',marginTop:'-6px'}}>®</div>
                                </div>
                            </div>
                        </Button>
                    </ListItem>
                </List>
            </Paper>
            <div className={classes.toolBar}/>
        </React.Fragment>
    );
}

export default Navigation;
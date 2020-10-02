import React from 'react'
import background from '../../assets/background.jpg'
import makeStyles from "@material-ui/core/styles/makeStyles";
import secondaryNav from '../../assets/secondaryNav.jpg'
import secondaryLogo from '../../assets/leftDrawerLogo.png'
import Button from "@material-ui/core/Button";
import dropdown from '../../assets/dropdownlink.png'
import SearchIcon from '@material-ui/icons/Search';
import topUp from '../../assets/topup.jpg'
import tryButton from '../../assets/try.jpg'
import smNavLogo from '../../assets/smNavLogo.png'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import * as action from '../../store/action/index'
import {connect} from 'react-redux'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

function MainPage(props) {

    const useStyle=makeStyles((theme)=>{
        return{
            '@keyframes drop':{
                '0%':{
                    opacity:0,
                    height:'0',
                    overflow:'hidden'
                },
                '100%':{
                    opacity:1,
                    height:'375px',
                    overflow:'hidden'
                }
            },
            '@keyframes return':{
                '0%':{
                    opacity:1,
                    height:'375px',
                    overflow:'hidden'
                },
                '100%':{
                    opacity:0,
                    height:'0',
                    overflow:'hidden'
                }
            },
            wrapper:{
                position:'absolute',
                backgroundImage:`url(${background})`,
                backgroundSize:'cover',
                backgroundPosition:'50% 50%',
                top:'40px',
                bottom:'0',
                left:'0',
                right:'0',
                height:'874px',
                zIndex:'-2',
                '&:before':{
                    position:'absolute',
                    top:'0',
                    right:'0',
                    bottom:'0',
                    left:'0',
                    boxShadow:'inset 0 0 0 1px hsla(0,0%,100%,.08)',
                    content:'""',
                    zIndex:'-1'
                },
                padding:'0 30px',
                '@media(max-width: 1450px)':{
                    height:'850px'
                },
                '@media(max-width: 1280px)':{
                    height:'640px'
                },
                '@media(max-width: 980px)':{
                    height:'430px'
                },
                '@media(max-width: 720px)':{
                    height:'340px'
                },
            },
            secondaryNav:{
                width:'1440px',
                height:'80px',
                marginTop:'40px',
                backgroundImage:`url(${secondaryNav})`,
                background:'#211510 repeat-x 80px 0',
                backgroundSize:'auto 100%',
                position:'relative',
                display:'flex',
                alignItems:'center',
                marginLeft:'6.2em',
                transition:'0.3s',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                '&:before':{
                    background:'rgba(68,47,38,.5)',
                    content:'""',
                    height:'1px',
                    position:'absolute',
                    left:'0',
                    right:'0',
                    top:'0'
                },
                '&:after':{
                    background:'rgba(68,47,38,.5)',
                    content:'""',
                    height:'1px',
                    position:'absolute',
                    left:'0',
                    right:'0',
                    bottom:'0'
                },
                '@media(max-width: 1450px)':{
                    height:'65px'
                },
                '@media(max-width: 1280px)':{
                    height:'60px'
                },
                '@media(max-width: 1080px)':{
                    height:'50px',
                    width:'100%',
                    marginLeft:'auto'
                },
            },
            logo:{
                width:'272px',
                marginLeft:'-10.2em',
                cursor:'pointer',
                '&:hover':{
                    filter:'brightness(1.2)'
                },
                transition:'0.3s',
                position:'relative',
                zIndex:'1',
                '@media(max-width: 1450px)':{
                    width:'245px'
                },
                '@media(max-width: 1280px)':{
                    width:'219px'
                },
                '@media(max-width: 1080px)':{
                    display:'none'
                },
            },
            gameTab:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'51px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                '@media(max-width: 1450px)':{
                    height:'65px',
                    minWidth:'45px'
                },
                '@media(max-width: 1280px)':{
                    height:'60px',
                    minWidth:'40px'
                },
                '@media(max-width: 1080px)':{
                    height:'50px'
                },
            },
            tabText:{
                backgroundImage:'-webkit-linear-gradient(top,#efd100,#e2a233 19%,#f0c328 30%,#fff1a3 43%,#ffe13e 50%,#fff 51%,#fff)',
                backgroundSize:'1em 2.5em',
                backgroundPosition:'center 0',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                fontSize:'17px',
                fontWeight:'700',
                lineHeight:'1.5em',
                '@media(max-width: 1450px)':{
                    fontSize:'14.4px'
                },
                '@media(max-width: 1280px)':{
                    fontSize:'12px'
                },
            },
            expandMoreIcon:{
                backgroundImage:`url(${dropdown})`,
                backgroundSize:'400% 100%',
                height:'11px',
                width:'16px',
                marginLeft:'3px'
            },
            gameTabDivider:{
                '&:before,&:after':{
                    background:'rgba(21,13,9,.8)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'-1',
                    top:'1px',
                    width:'1px'
                },
                marginLeft:'12px',
                '@media(max-width: 1080px)':{
                    marginLeft:'0'
                },
            },
            topUpButton:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(179,61,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(179,61,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                backgroundImage:`url(${topUp})`,
                backgroundSize:'cover',
                '@media(max-width: 1450px)':{
                    height:'65px'
                },
                '@media(max-width: 1280px)':{
                    height:'60px'
                },
                '@media(max-width: 1080px)':{
                    height:'50px'
                },
            },
            tryButton:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(179,61,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(179,61,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                backgroundImage:`url(${tryButton})`,
                backgroundSize:'cover',
                '@media(max-width: 1450px)':{
                    height:'65px'
                },
                '@media(max-width: 1280px)':{
                    height:'60px'
                },
                '@media(max-width: 1080px)':{
                    height:'50px'
                },
            },
            topUpWrapper:{
                '&:before':{
                    background:'rgba(179,61,38,.5)',
                    content:'" "',
                    position:'absolute',
                    top:'0',
                    height:'1px',
                    right:'0',
                    zIndex:'1',
                    width:'172px',
                    '@media(max-width: 1450px)':{
                        width:'150px'
                    },
                    '@media(max-width: 1280px)':{
                        width:'130px'
                    },

                },
                '&:after':{
                    background:'rgba(179,61,38,.5)',
                    content:'" "',
                    position:'absolute',
                    bottom:'0',
                    height:'1px',
                    right:'0',
                    zIndex:'1',
                    width:'172px',
                    '@media(max-width: 1450px)':{
                        width:'150px'
                    },
                    '@media(max-width: 1280px)':{
                        width:'130px'
                    },
                }
            },
            searchButton:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'80px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                '@media(max-width: 1450px)':{
                    height:'65px',
                    minWidth:'66px'
                },
                '@media(max-width: 1280px)':{
                    height:'60px',
                    minWidth:'40px'
                },
                '@media(max-width: 1080px)':{
                    height:'50px'
                },
            },
            gameButton:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                '@media(max-width: 1450px)':{
                    height:'65px',
                    minWidth:'65px'
                },
                '@media(max-width: 1280px)':{
                    height:'60px',
                    minWidth:'61px'
                },
                '@media(max-width: 1080px)':{
                    height:'50px'
                }
            },
            smNavLogo:{
                width:'40px',
                margin:'0 10px',
                marginRight:'9px'
            },
            secondaryNavScrolled:{
                width:'100%',
                height:'50px',
                top:'0',
                backgroundImage:`url(${secondaryNav})`,
                background:'#211510 repeat-x 80px 0',
                backgroundSize:'auto 100%',
                position:'fixed',
                display:'flex',
                alignItems:'center',
                transition:'0.3s',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                zIndex:1200,
                '&:before':{
                    background:'rgba(68,47,38,.5)',
                    content:'""',
                    height:'1px',
                    position:'absolute',
                    left:'0',
                    right:'0',
                    top:'0'
                },
                '&:after':{
                    background:'rgba(68,47,38,.5)',
                    content:'""',
                    height:'1px',
                    position:'absolute',
                    left:'0',
                    right:'0',
                    bottom:'0'
                },
                '@media(max-width: 1080px)':{
                    height:'50px',
                    width:'100%',
                    marginLeft:'auto'
                },
            },
            searchButtonScrolled:{
                height:'50px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'50px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                '@media(max-width: 1080px)':{
                    height:'50px'
                },
            },
            gameButtonScrolled:{
                height:'50px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                '@media(max-width: 1080px)':{
                    height:'50px'
                }
            },
            topUpButtonScrolled:{
                height:'50px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(179,61,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(179,61,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                backgroundImage:`url(${topUp})`,
                backgroundSize:'cover',
                '@media(max-width: 1080px)':{
                    height:'50px'
                },
            },
            tryButtonScrolled:{
                height:'50px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(179,61,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(179,61,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                backgroundImage:`url(${tryButton})`,
                backgroundSize:'cover',
                '@media(max-width: 1080px)':{
                    height:'50px'
                },
            },
            gameTabScrolled:{
                height:'50px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'51px',
                marginLeft:'1px',
                transition:'0.3s',
                '&:before':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'0',
                    top:'1px',
                    width:'1px'
                },
                '&:after':{
                    background:'rgba(68,47,38,.5)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    right:'0',
                    top:'1px',
                    width:'1px'
                },
                '@media(max-width: 1080px)':{
                    height:'50px'
                },
            },
            gameTabDividerScrolled:{
                '&:before,&:after':{
                    background:'rgba(21,13,9,.8)',
                    bottom:'1px',
                    content:'" "',
                    position:'absolute',
                    left:'-1',
                    top:'1px',
                    width:'1px'
                },
                marginLeft:'0',
                '@media(max-width: 1080px)':{
                    marginLeft:'0'
                },
            },
            content:{
                position:'absolute',
                top:'914px',
                height:'1000px',
                '@media(max-width: 1450px)':{
                    top:'890px'
                },
                '@media(max-width: 1280px)':{
                    top:'680px'
                },
                '@media(max-width: 980px)':{
                    top:'470px'
                },
                '@media(max-width: 720px)':{
                    top:'380px'
                },
            },
            title:{
                position:'absolute',
                bottom:'60px',
                left:'20px',
                paddingRight:'16px',
                zIndex:'-1',
                '@media(max-width: 720px)':{
                    bottom:'40px'
                }
            },
            titleText:{
                fontSize:'36px',
                fontWeight:'700',
                color:'white',
                '@media(max-width: 1280px)':{
                    fontSize:'30px'
                },
                '@media(max-width: 720px)':{
                    fontSize:'27px'
                }
            },
            titleTextMobile:{
                fontSize:'21px',
                fontWeight:'400',
                color:'#ebdec2',
                borderRight:'1px solid hsla(0,0%,66.7%,.4)',
                paddingRight:'5px',
                marginRight:'5px',
                paddingBottom:'2px',
                marginLeft:'5px',
                '@media(max-width: 1280px)':{
                    fontSize:'17.5px'
                },
                '@media(max-width: 720px)':{
                    fontSize:'15.5px'
                },
                '@media(max-width: 540px)':{
                    borderRight:'none',
                    marginLeft:'0'
                },
            },
            titleTextContent:{
                fontSize:'17px',
                fontWeight:'400',
                color:'#ebdec2',
                '@media(max-width: 1280px)':{
                    fontSize:'14.5px'
                },
                '@media(max-width: 720px)':{
                    fontSize:'13px'
                }
            },
            titleWrapper:{
                display:'flex',
                alignItems:'center',
                marginTop:'16px',
                '@media(max-width: 540px)':{
                    display:'block'
                }
            },
            secondaryNavDropDown:{
                width:'100%',
                height:'375px',
                background:'linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97))',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                border:'1px solid #241505',
                borderTop:'0',
                overflow:'hidden',
                borderRadius:'0',
                maxWidth:'1536px',
                margin:'0 auto',
                transition:'0.3s',
                animation:`$drop 0.3s ${theme.transitions.easing.easeInOut}`,
                '@media(max-width: 960px)':{
                    display:'none'
                }
            },
            dropdownTitle:{
                padding:'5px 0',
                fontSize:'14px',
                color:'#cacaca',
                borderBottom:'1px solid #352011',
                fontWeight:'700',
                width:'100%',
                maxWidth:'349px',
                '@media(max-width: 1280px)':{
                    fontSize:'12.3px'
                }
            },
            dropdownContent:{
                fontSize:'14px',
                color:'#f8b700',
                lineHeight:'1.5em',
                marginTop:'10px',
                '&:hover':{
                    color:'white'
                },
                cursor:'pointer',
                '@media(max-width: 1280px)':{
                    fontSize:'12px'
                }
            },
            secondaryNavDropDownHide:{
                width:'100%',
                height:'0px',
                background:'linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97))',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                borderLeft:'1px solid #241505',
                borderRight:'1px solid #241505',
                borderTop:'0',
                overflow:'hidden',
                borderRadius:'0',
                maxWidth:'1536px',
                margin:'0 auto',
                transition:'0.3s',
                animation:`$return 0.3s ${theme.transitions.easing.easeInOut}`,
                '@media(max-width: 960px)':{
                    display:'none'
                }
            }
        }
    })
    const classes=useStyle()

    const theme=useTheme()
    const smMatch=useMediaQuery(theme.breakpoints.down('sm'))

    const secondaryDropdown=<React.Fragment>
            <Paper className={classes.secondaryNavDropDown}>
                <Grid container style={{width:'95%',margin:'0 auto',marginTop:'36px'}} spacing={3}>
                    <Grid item style={{width:'25%'}}>
                        <div className={classes.dropdownTitle}>
                            游戏玩法
                        </div>
                        <div>
                            <div className={classes.dropdownContent}>
                                种族
                            </div>
                            <div className={classes.dropdownContent}>
                                职业
                            </div>
                            <div className={classes.dropdownContent}>
                                天赋模拟器
                            </div>
                        </div>
                    </Grid>
                    <Grid item style={{width:'25%'}}>
                        <div className={classes.dropdownTitle}>
                            魔兽世界知识
                        </div>
                        <div>
                            <div className={classes.dropdownContent}>
                                所有
                            </div>
                            <div className={classes.dropdownContent}>
                                动画
                            </div>
                            <div className={classes.dropdownContent}>
                                音频
                            </div>
                            <div className={classes.dropdownContent}>
                                漫画
                            </div>
                            <div className={classes.dropdownContent}>
                                书籍
                            </div>
                            <div className={classes.dropdownContent}>
                                短篇小说
                            </div>
                            <div className={classes.dropdownContent}>
                                魔兽角色
                            </div>
                            <div className={classes.dropdownContent}>
                                魔兽里程碑
                            </div>
                        </div>
                    </Grid>
                    <Grid item style={{width:'25%'}}>
                        <div className={classes.dropdownTitle}>
                            指南和信息
                        </div>
                        <div>
                            <div className={classes.dropdownContent}>
                                新玩家
                            </div>
                            <div className={classes.dropdownContent}>
                                回归玩家
                            </div>
                            <div className={classes.dropdownContent}>
                                服务器状态
                            </div>
                            <div className={classes.dropdownContent}>
                                战友招募
                            </div>
                            <div className={classes.dropdownContent}>
                                内容更新说明
                            </div>
                        </div>
                    </Grid>
                    <Grid item style={{width:'25%'}}>
                        <div className={classes.dropdownTitle}>
                            新内容
                        </div>
                        <div>
                            <div className={classes.dropdownContent} style={{display:'flex'}}>
                                暗影国度
                                <span style={{fontSize:'12px',color:'#c76700',marginTop:'-5px',marginLeft:'2px'}}>新</span>
                            </div>
                            <div className={classes.dropdownContent}>
                                争霸艾泽拉斯
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
    </React.Fragment>

    const secondaryNavigation=<React.Fragment>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <div className={props.scrolled?classes.secondaryNavScrolled:classes.secondaryNav}>
                <img src={smNavLogo} alt='smNavLogo' className={classes.smNavLogo}/>
                {props.scrolled?null:<img src={secondaryLogo} alt='secondaryLogo' className={classes.logo}/>}
                <div className={props.scrolled?classes.gameTabDividerScrolled:classes.gameTabDivider}>
                    <Button className={props.scrolled?classes.gameButtonScrolled:classes.gameButton}
                            disableRipple
                            onClick={props.openSecondaryDropdown}
                    >
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>游戏</span>
                            <div className={classes.expandMoreIcon}></div>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={props.scrolled?classes.gameTabScrolled:classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>新闻</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={props.scrolled?classes.gameTabScrolled:classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>论坛</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={props.scrolled?classes.gameTabScrolled:classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>商城</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={props.scrolled?classes.gameTabScrolled:classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>《魔兽世界》经典怀旧服</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'auto'}}>
                    <Button className={props.scrolled?classes.searchButtonScrolled:classes.searchButton} disableRipple >
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <SearchIcon style={{color:'#f8b700',transform:'rotate(90deg)',fontSize:'27px'}}/>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={props.scrolled?classes.gameTabScrolled:classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>登录</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.topUpWrapper}>
                    <Button className={props.scrolled?classes.topUpButtonScrolled:classes.topUpButton} disableRipple style={{minWidth:'51px'}}>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>立即充值</span>
                        </div>
                    </Button>
                </div>
                <div>
                    <Button className={props.scrolled?classes.tryButtonScrolled:classes.tryButton} disableRipple style={{minWidth:'51px',marginLeft:'0'}}>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>免费体验</span>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    </React.Fragment>

    return (
        <React.Fragment>
                <div className={classes.wrapper}>
                    {smMatch?null:secondaryNavigation}
                    {props.secondaryDropdown?secondaryDropdown:null}
                    <div className={classes.title}>
                        <span className={classes.titleText}>观看“暗影国度”动画短片彼岸之地：雷文德斯</span>
                        <div className={classes.titleWrapper}>
                            <div className={classes.titleTextMobile}>mobile</div>
                            <div className={classes.titleTextContent}>由<span style={{color:'#f8b700'}}>魔兽世界运营团队</span>于2020年9月18日 01:04 CST发布</div>
                        </div>
                    </div>
                <div className={classes.content}>
                    123
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        scrolled:state.navigation.scrolled,
        secondaryDropdown:state.navigation.secondaryDropdown,
        clickAway:state.navigation.clickAway
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        scrollUp:()=>{dispatch(action.scrollUp())},
        scrollDown:()=>{dispatch(action.scrollDown())},
        openSecondaryDropdown:()=>{dispatch(action.openSecondaryDropdown())},
        closeSecondaryDropdown:()=>{dispatch(action.closeSecondaryDropdown())},
        clickAwayHandler:()=>{dispatch(action.clickAway())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
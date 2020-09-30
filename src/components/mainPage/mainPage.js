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

function MainPage(props) {

    const useStyle=makeStyles((theme)=>{
        return{
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
                '&:before':{
                    position:'absolute',
                    top:'0',
                    right:'0',
                    bottom:'0',
                    left:'0',
                    boxShadow:'inset 0 0 0 1px hsla(0,0%,100%,.08)',
                    content:'""',
                },
                padding:'0 30px'
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
            }
        }
    })
    const classes=useStyle()

    const theme=useTheme()
    const smMatch=useMediaQuery(theme.breakpoints.down('sm'))

    const secondaryNavigation=<React.Fragment>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <div className={classes.secondaryNav}>
                <img src={smNavLogo} alt='smNavLogo' className={classes.smNavLogo}/>
                <img src={secondaryLogo} alt='secondaryLogo' className={classes.logo}/>
                <div className={classes.gameTabDivider}>
                    <Button className={classes.gameButton} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>游戏</span>
                            <div className={classes.expandMoreIcon}></div>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>新闻</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>论坛</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>商城</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>《魔兽世界》经典怀旧服</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'auto'}}>
                    <Button className={classes.searchButton} disableRipple >
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <SearchIcon style={{color:'#f8b700',transform:'rotate(90deg)',fontSize:'27px'}}/>
                        </div>
                    </Button>
                </div>
                <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                    <Button className={classes.gameTab} disableRipple>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>登录</span>
                        </div>
                    </Button>
                </div>
                <div className={classes.topUpWrapper}>
                    <Button className={classes.topUpButton} disableRipple style={{minWidth:'51px'}}>
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            <span>立即充值</span>
                        </div>
                    </Button>
                </div>
                <div>
                    <Button className={classes.tryButton} disableRipple style={{minWidth:'51px',marginLeft:'0'}}>
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
                </div>
        </React.Fragment>
    );
}

export default MainPage;
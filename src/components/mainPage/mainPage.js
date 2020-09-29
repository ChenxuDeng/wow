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
                }
            },
            secondaryNav:{
                width:'1320px',
                height:'80px',
                marginTop:'40px',
                backgroundImage:`url(${secondaryNav})`,
                background:'#211510 repeat-x 80px 0',
                backgroundSize:'auto 100%',
                position:'relative',
                display:'flex',
                alignItems:'center',
                marginLeft:'70px',
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
                }
            },
            logo:{
                width:'272px',
                marginLeft:'-75px',
                cursor:'pointer',
                '&:hover':{
                    filter:'brightness(1.2)'
                },
                transition:'0.3s',
                position:'relative',
                zIndex:'1'
            },
            gameTab:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
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
                }
            },
            tabText:{
                backgroundImage:'-webkit-linear-gradient(top,#efd100,#e2a233 19%,#f0c328 30%,#fff1a3 43%,#ffe13e 50%,#fff 51%,#fff)',
                backgroundSize:'1em 2.5em',
                backgroundPosition:'center 0',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                fontSize:'17px',
                fontWeight:'700',
                lineHeight:'1.5em'
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
                marginLeft:'12px'
            },
            topUpButton:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
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
                backgroundSize:'cover'
            },
            tryButton:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
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
                backgroundSize:'cover'
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
                    width:'172px'
                },
                '&:after':{
                    background:'rgba(179,61,38,.5)',
                    content:'" "',
                    position:'absolute',
                    bottom:'0',
                    height:'1px',
                    right:'0',
                    zIndex:'1',
                    width:'172px'
                }
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
                <div className={classes.wrapper}>
                    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                        <div className={classes.secondaryNav}>
                            <img src={secondaryLogo} alt='secondaryLogo' className={classes.logo}/>
                            <div className={classes.gameTabDivider}>
                                <Button className={classes.gameTab} disableRipple>
                                    <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                                        <span>游戏</span>
                                        <div className={classes.expandMoreIcon}></div>
                                    </div>
                                </Button>
                            </div>
                            <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                                <Button className={classes.gameTab} disableRipple style={{minWidth:'51px'}}>
                                    <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                                        <span>新闻</span>
                                    </div>
                                </Button>
                            </div>
                            <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                                <Button className={classes.gameTab} disableRipple style={{minWidth:'51px'}}>
                                    <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                                        <span>论坛</span>
                                    </div>
                                </Button>
                            </div>
                            <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                                <Button className={classes.gameTab} disableRipple style={{minWidth:'51px'}}>
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
                                <Button className={classes.gameTab} disableRipple style={{minWidth:'80px'}}>
                                    <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                                        <SearchIcon style={{color:'#f8b700',transform:'rotate(90deg)',fontSize:'30px'}}/>
                                    </div>
                                </Button>
                            </div>
                            <div className={classes.gameTabDivider} style={{marginLeft:'0'}}>
                                <Button className={classes.gameTab} disableRipple style={{minWidth:'51px'}}>
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

                </div>
        </React.Fragment>
    );
}

export default MainPage;
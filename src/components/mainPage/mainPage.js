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
import InputBase from "@material-ui/core/InputBase";
import CloseIcon from '@material-ui/icons/Close';
import footerImg from '../../assets/footer.png'
import footerLeft from '../../assets/footerLeft.png'
import footerRight from '../../assets/footerRight.png'
import divider from '../../assets/divider.png'
import buttonFrame1 from '../../assets/buttonFrame1.png'
import buttonFrame2 from '../../assets/buttonFrame2.png'
import buttonFrame3 from '../../assets/buttonFrame3.png'
import buttonFrame4 from '../../assets/buttonFrame4.jpg'
import buttonFrame5 from '../../assets/buttonFrame5.png'
import buttonFrame6 from '../../assets/buttonFrame6.png'
import buttonFrame7 from '../../assets/buttonFrame7.jpg'
import contentBackground from '../../assets/contentBackground.jpg'
import Container from "@material-ui/core/Container";
import video1 from '../../assets/video1.mp4'
import contentDivider from '../../assets/contentDivider.png'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import video4 from '../../assets/video4.mp4'
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import bottomBackground from '../../assets/bottomBackground.jpg'
import buttonIcon1 from '../../assets/bottomIcon1.gif'
import buttonIcon2 from '../../assets/bottomIcon2.gif'
import buttonIcon3 from '../../assets/bottomIcon3.gif'
import buttonIcon4 from '../../assets/bottomIcon4.gif'
import buttonIcon5 from '../../assets/bottomIcon5.png'

function MainPage(props) {

    const useStyle=makeStyles((theme)=>{
        return{
            '@keyframes anima-background':{
                '0%':{
                    backgroundPosition: '248px 50%, 0 50%, 0 50%'
                },
                '100%':{
                    backgroundPosition: '500% 50%, -1330px 50%, -665px 50%'
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
                '&:hover':{
                    filter:'brightness(200%) grayscale()',
                },
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
                marginLeft:'3px',
                transition:'0.2s'
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
                zIndex:theme.zIndex.appBar+1,
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
            contentBackground:{
                position:'absolute',
                top:'914px',
                marginTop:'-40px',
                left:'0',
                backgroundImage:`url(${contentBackground})`,
                backgroundPosition:'top',
                backgroundSize:'100%',
                width:'100%',

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
                position:'relative',
                bottom:'60px',
                paddingRight:'16px',
                zIndex:'-1',
                maxWidth:'1600px',
                margin:'0 auto',
                marginTop:'770px',
                '@media(max-width: 1280px)':{
                    marginTop:'580px'
                },
                '@media(max-width: 980px)':{
                    marginTop:'380px'
                },
                '@media(max-width: 720px)':{
                    marginTop:'300px'
                },
                '@media(max-width: 632px)':{
                    marginTop:'260px'
                },
                '@media(max-width: 540px)':{
                    marginTop:'240px'
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
                '@media(max-width: 960px)':{
                    display:'none'
                }
            },
            secondaryNavDropDownScrolled:{
                width:'99.8%',
                height:'375px',
                position:'fixed',
                top:'50px',
                background:'linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97))',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                border:'1px solid #241505',
                borderTop:'0',
                overflow:'hidden',
                borderRadius:'0',
                left:'0',
                transition:'0.3s',
                '@media(max-width: 960px)':{
                    display:'none'
                }
            },
            secondaryNavDropDownHideScrolled:{
                width:'99.8%',
                height:'0px',
                position:'fixed',
                top:'50px',
                background:'linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97))',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                borderLeft:'1px solid #241505',
                borderRight:'1px solid #241505',
                borderTop:'0',
                overflow:'hidden',
                borderRadius:'0',
                left:'0',
                margin:'0 auto',
                transition:'0.3s',
                '@media(max-width: 960px)':{
                    display:'none'
                }
            },
            tabTextHover:{
                backgroundImage:'-webkit-linear-gradient(top,#efd100,#e2a233 19%,#f0c328 30%,#fff1a3 43%,#ffe13e 50%,#fff 51%,#fff)',
                backgroundSize:'1em 2.5em',
                backgroundPosition:'center 0',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                fontSize:'17px',
                fontWeight:'700',
                lineHeight:'1.5em',
                filter:'brightness(200%) grayscale()',
                transition:'0.3s',
                '@media(max-width: 1450px)':{
                    fontSize:'14.4px'
                },
                '@media(max-width: 1280px)':{
                    fontSize:'12px'
                },
            },
            expandMoreIconHover:{
                backgroundImage:`url(${dropdown})`,
                backgroundSize:'400% 100%',
                height:'11px',
                width:'16px',
                marginLeft:'3px',
                filter:'brightness(200%) grayscale()',
                transition:'0.2s'
            },
            expandLessIcon:{
                backgroundImage:`url(${dropdown})`,
                backgroundSize:'400% 100%',
                height:'11px',
                width:'16px',
                marginLeft:'3px',
                filter:'brightness(200%) grayscale()',
                transform:'rotateX(180deg)',
                transition:'0.2s'
            },
            gameButtonOpened:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'73px',
                marginLeft:'1px',
                transition:'0.3s',
                background:'rgba(68,47,38,.5)',
                '&:hover':{
                    background:'rgba(68,47,38,.5)'
                },
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
            searchDropDown:{
                width:'100%',
                height:'342px',
                background:'linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97))',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                border:'1px solid #241505',
                borderTop:'0',
                overflow:'hidden',
                borderRadius:'0',
                maxWidth:'1536px',
                margin:'0 auto',
                transition:'0.3s',
                '@media(max-width: 960px)':{
                    display:'none'
                }
            },
            searchArea:{
                display:'flex',
                alignItems:'center',
                margin:'0 auto',
                width:'93.5%',
                height:'51px',
                background:'linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97))',
                border:'1px solid #352011',
                transition:'0.3s',
                borderRadius:'0',
                marginTop:'45px'
            },
            InputBase:{
                '&::placeholder':{
                    color: '#f8b700',
                    fontStyle:'italic',
                    opacity:'0.9',
                    fontSize:'14px'
                }
            },
            searchDropDownHide:{
                width:'100%',
                height:'0',
                background:'linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97))',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                border:'1px solid #241505',
                borderBottom:'0',
                borderTop:'0',
                overflow:'hidden',
                borderRadius:'0',
                maxWidth:'1536px',
                margin:'0 auto',
                transition:'0.3s',
                '@media(max-width: 960px)':{
                    display:'none'
                }
            },
            searchDropDownScrolled:{
                width:'99.8%',
                height:'342px',
                position:'fixed',
                top:'50px',
                background:'linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97))',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                borderLeft:'1px solid #241505',
                borderRight:'1px solid #241505',
                borderTop:'0',
                overflow:'hidden',
                borderRadius:'0',
                left:'0',
                margin:'0 auto',
                transition:'0.3s',
                '@media(max-width: 960px)':{
                    display:'none'
                }
            },
            searchDropDownScrolledHide:{
                width:'99.8%',
                height:'0px',
                position:'fixed',
                top:'50px',
                background:'linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97))',
                boxShadow:'0 0 10px rgba(0,0,0,.6)',
                borderLeft:'1px solid #241505',
                borderRight:'1px solid #241505',
                borderTop:'0',
                overflow:'hidden',
                borderRadius:'0',
                left:'0',
                margin:'0 auto',
                transition:'0.3s',
                '@media(max-width: 960px)':{
                    display:'none'
                }
            },
            searchIcon:{
                color:'#f8b700',
                transform:'rotate(90deg)',
                fontSize:'27px'
            },
            searchButtonOpened:{
                height:'80px',
                borderRadius:'0',
                padding:'0 8px',
                minWidth:'80px',
                marginLeft:'1px',
                transition:'0.3s',
                background:'rgba(68,47,38,.5)',
                '&:hover':{
                    background:'rgba(68,47,38,.5)'
                },
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
                }
            },
            footer:{
                width:'100%',
                height:'74px',
                position:'fixed',
                bottom:'0',
                left:'0',
                backgroundImage:`url(${footerImg})`,
                backgroundSize:'auto 74px',
                backgroundPositionX:'50%',
                zIndex:'2',
                '&:before':{
                    content:'""',
                    backgroundImage:`url(${footerLeft})`,
                    height:'27px',
                    width:'173px',
                    position:'absolute',
                    top:'-13px',
                    left:'-110px',
                    backgroundPosition:'50% 50%'
                },
                '&:after':{
                    content:'""',
                    backgroundImage:`url(${footerRight})`,
                    height:'27px',
                    width:'173px',
                    position:'absolute',
                    top:'-13px',
                    right:'-110px',
                    backgroundPosition:'50% 50%'
                },
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                [theme.breakpoints.down('sm')]:{
                    height:'64px'
                }
            },
            footerTitle:{
                fontSize:'17px',
                color:'#ffcd6d',
                backgroundImage:'-webkit-linear-gradient(top,#f8ebda,#f8ebda 50%,#ffd79f)',
                paddingBottom:'6px',
                WebkitTextFillColor:'transparent',
                backgroundSize:'1em 2.4em',
                lineHeight:'1',
                backgroundPosition:'center 100%',
                WebkitBackgroundClip:'text',
                fontWeight:'600',
                letterSpacing:'2px',
                [theme.breakpoints.down('sm')]:{
                    fontSize:'14.4px'
                }
            },
            footerText:{
                fontSize:'12px',
                color:'white',
                letterSpacing:'2px',
                backgroundImage:'-webkit-linear-gradient(top,#fff,#fff 50%,#b9b9b9)',
                WebkitTextFillColor:'transparent',
                WebkitBackgroundClip:'text',
                backgroundSize:'1em 2.4em',
                fontWeight:'600',
                backgroundPosition:'center 100%'
            },
            detailText:{
                fontSize:'12px',
                color:'#29a9cc',
                fontWeight:'600',
                letterSpacing:'2px',
                marginTop:'8px',
                marginLeft:'30px',
                marginRight:'30px',
                '&:before':{
                    content:'""',
                    position:'absolute',
                    width:'4px',
                    height:'74px',
                    top:'-19px',
                    left:'-12px',
                    backgroundImage:`url(${divider})`,
                    backgroundSize:'100% 100%',
                    backgroundPosition:'50% 50%'
                },
                '&:after':{
                    content:'""',
                    position:'absolute',
                    width:'4px',
                    height:'74px',
                    top:'-19px',
                    right:'-12px',
                    backgroundImage:`url(${divider})`,
                    backgroundSize:'100% 100%',
                    backgroundPosition:'50% 50%'
                },
                '&:hover':{
                    color:'white'
                },
                [theme.breakpoints.down('sm')]:{
                    display:'none'
                }
            },
            purchaseButton:{
                marginTop:'6px',
                marginLeft:'30px',
                transition:'0.3s',
                transform:'scaleY(-1)',
                textDecoration:'none',
                [theme.breakpoints.down('sm')]:{
                    marginLeft:'16px'
                }
            },
            innerFrame:{
                padding:'0 35px',
                transition:'0.3s',
                '&:before':{
                    width:'calc(50% + 50px)',
                    top:'-9px',
                    left:'-35px',
                    height:'85px',
                    backgroundSize:'auto 85px',
                    backgroundImage:`url(${buttonFrame2})`,
                    transition:'0.3s',
                    content:'""',
                    position:'absolute',
                    background:`transparent url(${buttonFrame1}) 100% no-repeat`,
                    transform:'scaleX(-1)',
                    backgroundPosition:'100% 50%',
                    backgroundAttachment:'scroll',
                    backgroundClip:'border-box',
                    backgroundOrigin:'padding-box',
                    zIndex:'1',
                    [theme.breakpoints.down('sm')]:{
                        width:'calc(50% + 18px)',
                        top:'-6px',
                        left:'-18px',
                        height:'62px',
                        backgroundSize:'auto 62px'
                    }
                },
                '&:after':{
                    width:'calc(50% + 50px)',
                    top:'-9px',
                    right:'-35px',
                    height:'85px',
                    backgroundSize:'auto 85px',
                    backgroundImage:`url(${buttonFrame2})`,
                    transition:'0.3s',
                    content:'""',
                    position:'absolute',
                    backgroundPosition:'100% 50%',
                    background:`transparent url(${buttonFrame1}) 100% no-repeat`,
                    zIndex:'1',
                    [theme.breakpoints.down('sm')]:{
                        width:'calc(50% + 18px)',
                        top:'-6px',
                        right:'-18px',
                        height:'62px',
                        backgroundSize:'auto 62px'
                    }
                },
                '&:hover:before':{
                    filter:'contrast(1.15)'
                },
                '&:hover:after':{
                    filter:'contrast(1.15)'
                },
            },
            label:{
                fontSize:'14.4px',
                textShadow:'0 2px 0 #000, 1px 0 9px #000, 0 1px 9px #000, -1px 0 9px #000, 0 -1px 9px #000, 1px 0 9px #000, 0 1px 9px #000',
                color:'#fff',
                letterSpacing:'4px',
                whiteSpace:'nowrap',
                lineHeight:'64px',
                fontWeight:'400',
                position:'relative',
                transform:'scaleY(-1)',
                zIndex:'2',
                '&:before':{
                    content:'""',
                    height:'100%',
                    width:'100%',
                    position:'absolute',
                    top:'0',
                    left:'0',
                    background:`transparent url(${buttonFrame5}) 50% no-repeat`,
                    transition:'0.3s',
                    backgroundImage:`url(${buttonFrame6})`,
                    backgroundPosition:'bottom',
                    backgroundSize:'auto 65px',
                    [theme.breakpoints.down('sm')]:{
                        backgroundSize:'auto 46px'
                    }
                },
                [theme.breakpoints.down('sm')]:{
                    fontSize:'13px',
                    lineHeight:'46px'
                }
            },
            outerFrame:{
                position:'relative',
                '&:before':{
                    animationPlayState:'running',
                    backgroundRepeat:'repeat-x',
                    backgroundImage:`url(${buttonFrame3}),url(${buttonFrame7})`,
                    WebkitAnimationPlayState:'running',
                    transition:'0.3s',
                    content:'""',
                    width:'100%',
                    height:'100%',
                    position:'absolute',
                    left:'0',
                    top:'0',
                    background:`transparent url(${buttonFrame4}) 50% 50% no-repeat`,
                    backgroundSize:'665px auto',
                    borderRadius:'20px'
                },
                '&:after':{
                    transition:'1s',
                    opacity:'0',
                    animation:`$anima-background 20s linear 0s infinite`,
                    WebkitAnimationPlayState:'running',
                    animationPlayState:'running',
                    backgroundRepeat:'repeat-x',
                    backgroundImage:`url(${buttonFrame3}),url(${buttonFrame7})`,
                    content:'""',
                    width:'100%',
                    height:'100%',
                    position:'absolute',
                    left:'0',
                    top:'0',
                    background:`transparent url(${buttonFrame4}) 50% 50% no-repeat`,
                    backgroundSize:'665px auto',
                    borderRadius:'20px'
                },
                '&:hover:after':{
                    opacity:'1',
                    filter:'brightness(1.3)'
                }
            },
            smallMatchText:{
                fontSize:'12px',
                color:'#29a9cc',
                fontWeight:'600',
                letterSpacing:'2px',
                cursor:'pointer',
                '&:hover':{
                    color:'white'
                }
            },
            contentText:{
                fontSize:'16px',
                fontStyle:'italic',
                color:'#ebdec2',
                lineHeight:'1.75'
            },
            contentTitle:{
                color:'#fff',
                fontWeight:'700',
                fontSize:'17px',
                lineHeight:'1.5em',
                margin:'20px 0'
            },
            contentDetail:{
                fontSize:'16px',
                color:'#f8b700',
                lineHeight:'1.75',
                margin:'0 auto',
                display:'block',
                marginTop:'16px',
                padding:'6px 0'
            },
            contentDivider:{
                height:'30px',
                width:'50%',
                backgroundImage:`url(${contentDivider})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'50%',
                backgroundSize:'contain',
                backgroundColor:'transparent',
                border:'0'
            },
            content:{
                padding:'80px 20px',
                '@media(max-width: 720px)':{
                    padding:'60px 20px'
                }
            },
            mobile:{
                fontSize:'12px',
                color:'#f8b700',
                marginLeft:'8px',
                textDecoration:'none',
                '&:hover':{
                    textDecoration:'underline'
                }
            },
            bottomBackground:{
                backgroundImage:`url(${bottomBackground})`,
                backgroundSize:'100%',
                backgroundPosition:'top',
                height:'85px',
                width:'100%',
                position:'absolute',
                left:'0',
                marginTop:'60px',
                '&:before':{
                    content:'""',
                    boxShadow:'inset 0 0 0 1px hsla(0,0%,100%,.08)',
                    position:'absolute',
                    top:'0',
                    left:'0',
                    right:'0',
                    bottom:'0'
                }
            },
            icon:{
                width:'30px',
                fill:'#f8b700',
                zIndex:'1',
                cursor:'pointer',
                marginLeft:'30px',
                '&:hover':{
                    fill:'white'
                }
            },
            bottomLogo:{
                width:'124px',
                fill:'#00aeff',
                position:'absolute'
            },
            bottomButton:{
                fontSize:'17px',
                color:'rgba(255,255,255,.7)',
                transition:'0.2s',
                padding:'0',
                whiteSpace:'nowrap',
                '&:hover':{
                    color:'rgba(255,255,255,1)'
                },
                '&:before':{
                    height:'10px',
                    width:'1px',
                    background:'rgba(255,255,255,.3)',
                    content:'""',
                    margin:'0 15px'
                }
            },
            bottomButtonFirst:{
                fontSize:'17px',
                color:'rgba(255,255,255,.7)',
                transition:'0.2s',
                padding:'0',
                '&:hover':{
                    color:'rgba(255,255,255,1)'
                }
            },
            bottomLogoButton:{
                padding:'0',
                transition:'0.2s',
                '&:hover':{
                    filter:'brightness(1.2)'
                }
            },
            smallBottomButton:{
                fontSize:'13px',
                color:'rgba(255,255,255,.7)',
                transition:'0.2s',
                padding:'0',
                whiteSpace:'nowrap',
                '&:hover':{
                    color:'rgba(255,255,255,1)'
                },
                '&:before':{
                    height:'10px',
                    width:'1px',
                    background:'rgba(255,255,255,.3)',
                    content:'""',
                    margin:'0 7px'
                }
            }
        }
    })
    const classes=useStyle()

    const theme=useTheme()
    const smMatch=useMediaQuery(theme.breakpoints.down('sm'))

    let paperStyle=props.secondaryDropdown?classes.secondaryNavDropDown:classes.secondaryNavDropDownHide
    if(props.scrolled){
        paperStyle=props.secondaryDropdown?classes.secondaryNavDropDownScrolled:classes.secondaryNavDropDownHideScrolled
    }

    let gameTextStyle=props.gameHover?classes.tabTextHover:classes.tabText
    if(props.secondaryDropdown){
        gameTextStyle=classes.tabTextHover
    }

    let gameIconStyle=props.gameHover?classes.expandMoreIconHover:classes.expandMoreIcon
    if(props.secondaryDropdown){
        gameIconStyle=classes.expandLessIcon
    }

    let gameButtonStyle={background:'rgba(68,47,38,.5)'}

    let searchDropDownStyle=props.searchDropdownState?classes.searchDropDown:classes.searchDropDownHide
    if(props.scrolled){
        searchDropDownStyle=props.searchDropdownState?classes.searchDropDownScrolled:classes.searchDropDownScrolledHide
    }

    let searchButtonStyle={background:'rgba(68,47,38,.5)'}

    const secondaryDropdown=<React.Fragment>
        <ClickAwayListener onClickAway={props.closeSecondaryDropdown}>
            <Paper className={paperStyle}>
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
        </ClickAwayListener>
    </React.Fragment>

    const secondaryNavigation=<React.Fragment>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <div className={props.scrolled?classes.secondaryNavScrolled:classes.secondaryNav}>
                <img src={smNavLogo} alt='smNavLogo' className={classes.smNavLogo}/>
                {props.scrolled?null:<img src={secondaryLogo} alt='secondaryLogo' className={classes.logo}/>}
                <div className={props.scrolled?classes.gameTabDividerScrolled:classes.gameTabDivider}>
                    <Button className={props.scrolled?classes.gameButtonScrolled:classes.gameButton}
                            disableRipple
                            onClick={props.secondaryDropdown?props.openSecondaryDropdown:()=>setTimeout(props.openSecondaryDropdown)}
                            onMouseOver={props.gameMouseOver}
                            onMouseLeave={props.gameMouseLeave}
                            style={props.secondaryDropdown?gameButtonStyle:null}
                    >
                        <div style={{display:'flex',alignItems:'center'}} className={gameTextStyle}>
                            <span>游戏</span>
                            <div className={gameIconStyle}></div>
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
                    <Button className={props.scrolled?classes.searchButtonScrolled:classes.searchButton}
                            disableRipple
                            onClick={props.searchDropdownState?props.openSearchDropdown:()=>{setTimeout(props.openSearchDropdown)}}
                            style={props.searchDropdownState?searchButtonStyle:null}
                    >
                        <div style={{display:'flex',alignItems:'center'}} className={classes.tabText}>
                            {props.searchDropdownState?<CloseIcon style={{fontSize:'25px',color:'white'}}/>:<SearchIcon className={classes.searchIcon}/>}
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
            <div style={{padding:'0 30px'}}>
                {smMatch?null:secondaryNavigation}
                {secondaryDropdown}
                <ClickAwayListener onClickAway={props.closeSearchDropdown}>
                    <Paper className={searchDropDownStyle}>
                        <Paper className={classes.searchArea}>
                            <SearchIcon style={{color:'#f8b700',transform:'rotate(90deg)',fontSize:'27px',marginLeft:'16px'}}/>
                            <InputBase style={{width:'100%',color:'white',marginLeft:'10px'}} placeholder={'搜索内容'} inputProps={{className:classes.InputBase}}/>
                        </Paper>
                        <Grid container style={{width:'95%',margin:'0 auto',marginTop:'36px'}} spacing={3}>
                            <Grid item style={{width:'25%'}}>
                                <div className={classes.dropdownTitle}>
                                    资源
                                </div>
                                <div>
                                    <div className={classes.dropdownContent}>
                                        新玩家
                                    </div>
                                    <div className={classes.dropdownContent}>
                                        回家玩家
                                    </div>
                                    <div className={classes.dropdownContent}>
                                        天赋模拟器
                                    </div>
                                    <div className={classes.dropdownContent}>
                                        服务器状态
                                    </div>
                                </div>
                            </Grid>
                            <Grid item style={{width:'25%'}}>
                                <div className={classes.dropdownTitle}>
                                    新闻
                                </div>
                                <div>
                                    <div className={classes.dropdownContent}>
                                        最近更新
                                    </div>
                                </div>
                            </Grid>
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
                                </div>
                            </Grid>
                            <Grid item style={{width:'25%'}}>
                                <div className={classes.dropdownTitle}>
                                    论坛
                                </div>
                                <div>
                                    <div className={classes.dropdownContent} style={{display:'flex'}}>
                                        支持
                                    </div>
                                    <div className={classes.dropdownContent}>
                                        社区
                                    </div>
                                    <div className={classes.dropdownContent}>
                                        网页和移动端反馈
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </ClickAwayListener>
                <div className={classes.wrapper}>
                    <div className={classes.footer}>
                        <div style={{textAlign:'center',marginTop:'8px'}}>
                            <div className={classes.footerTitle}>
                                《暗影国度》
                            </div>
                            <div className={smMatch?classes.smallMatchText:classes.footerText}>
                                {smMatch?'了解详情':'数字礼包'}
                            </div>
                        </div>
                        <Button className={classes.detailText} disableRipple>
                            了解详情
                        </Button>
                        <Button className={classes.purchaseButton}
                                disableRipple
                        >
                            <div className={classes.outerFrame}>
                                <div className={classes.innerFrame}>
                                    <div className={classes.label}>
                                        立即购买
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                        <div className={classes.title}>
                            <span className={classes.titleText}>观看“暗影国度”动画短片彼岸之地：雷文德斯</span>
                            <div className={classes.titleWrapper}>
                                <div className={classes.titleTextMobile}>mobile</div>
                                <div className={classes.titleTextContent}>由<span style={{color:'#f8b700'}}>魔兽世界运营团队</span>于2020年9月18日 01:04 CST发布</div>
                            </div>
                        </div>
                    <div className={classes.contentBackground}>
                        <div className={classes.content}>
                            <Container maxWidth={'md'} style={{padding:'0'}}>
                                <div className={classes.contentText} style={{fontWeight:'700'}}>
                                    观看最新动画短片彼岸之地：雷文德斯，与雷文德斯的子民一同聆听德纳修斯大帝的特别咨文。
                                </div>
                                <div className={classes.contentTitle}>
                                    彼岸之地：雷文德斯
                                </div>
                                <div className={classes.contentText}>
                                    雷文德斯主宰者、德纳修斯大帝在百忙之中抽空安抚了自己的子民。他承诺说，虽然起源不明的心能枯竭依旧荼毒着雷文德斯，但是他采取的措施将确保这个国度的长治久安——只要他们的信仰永远坚定不移。
                                </div>
                                <div style={{textAlign:'center',marginTop:'20px'}}>
                                    <video src={video1}
                                           style={{width:'98%'}}
                                           poster={'https://cms.cnc.blzstatic.cn/cms/gallery/4946UAG5OJ041598553600637.jpg'}
                                           preload
                                           controls={'controls'}
                                    />
                                </div>
                                <Button className={classes.contentDetail} disableRipple>
                                    观看高清视频
                                </Button>
                                <Button className={classes.contentDetail} style={{marginLeft:'0',marginTop:'0'}} disableRipple>
                                    查看制作人员名单
                                </Button>
                                <hr className={classes.contentDivider}/>
                                <div className={classes.contentTitle}>
                                    彼岸之地：炽蓝仙野
                                </div>
                                <div className={classes.contentText}>
                                    在炽蓝仙野的森林中，守护者们照看着林地，呵护着静待重生的自然之灵。但是在心能枯竭之际，当一名守护者奋力保护垂死的林地时，他面临着两难的抉择。
                                </div>
                                <div style={{textAlign:'center',marginTop:'20px'}}>
                                    <video src={video2}
                                           style={{width:'98%'}}
                                           poster={'https://cms.cnc.blzstatic.cn/cms/gallery/IFWWJIJL0M1J1598553600667.jpg'}
                                           preload
                                           controls={'controls'}
                                    />
                                </div>
                                <Button className={classes.contentDetail} disableRipple>
                                    观看高清视频
                                </Button>
                                <Button className={classes.contentDetail} style={{marginLeft:'0',marginTop:'0'}} disableRipple>
                                    查看制作人员名单
                                </Button>
                                <hr className={classes.contentDivider}/>
                                <div className={classes.contentTitle}>
                                    彼岸之地：玛卓克萨斯
                                </div>
                                <div className={classes.contentText}>
                                    霜狼氏族的兽人德拉卡并非是天生的战士，而是后天锤炼而来。连绵的战火铸就了玛卓克萨斯的大军，也让德拉卡明白了，没有什么是一成不变的——甚至包括她自己。
                                </div>
                                <div style={{textAlign:'center',marginTop:'20px'}}>
                                    <video src={video3}
                                           style={{width:'98%'}}
                                           poster={'https://cms.cnc.blzstatic.cn/cms/gallery/FXK7JLEWQ1N51598553600576.jpg'}
                                           preload
                                           controls={'controls'}
                                    />
                                </div>
                                <Button className={classes.contentDetail} disableRipple>
                                    观看高清视频
                                </Button>
                                <Button className={classes.contentDetail} style={{marginLeft:'0',marginTop:'0'}} disableRipple>
                                    查看制作人员名单
                                </Button>
                                <hr className={classes.contentDivider}/>
                                <div className={classes.contentTitle}>
                                    彼岸之地：晋升堡垒
                                </div>
                                <div className={classes.contentText}>
                                    光明使者乌瑟尔，白银之手骑士团的圣骑士，最终死于非命……但他的奉献之旅还未完结。乌瑟尔来到冥世后，德沃丝——晋升堡垒的一名圣杰——庇护着他。而后，她发现，有些凡间的伤口，比她想的要深得多。
                                </div>
                                <div style={{textAlign:'center',marginTop:'20px'}}>
                                    <video src={video4}
                                           style={{width:'98%'}}
                                           poster={'https://cms.cnc.blzstatic.cn/cms/gallery/9k/9KXIM4BXBCKH1598516770262.jpg'}
                                           preload
                                           controls={'controls'}
                                    />
                                </div>
                                <Button className={classes.contentDetail} disableRipple>
                                    观看高清视频
                                </Button>
                                <Button className={classes.contentDetail} style={{marginLeft:'0',marginTop:'0'}} disableRipple>
                                    查看制作人员名单
                                </Button>
                                <div className={classes.contentTitle}>
                                    晋升堡垒制作人员名单
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal'}}>
                                    <div>
                                        <span style={{fontWeight:'700'}}>导演：</span>Terran Gregory
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>制作：</span>Taka Yasuda
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>编剧：</span>Andrew Robinson
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>美术指导：</span>Laurel Austin
                                    </div>
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>作画：</span>Adam Baines、Jasmine Goggins、Josh Tallman、Jungah Lee、Laurent Pierlot
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>分镜：</span>Ted Boonthanakit、Ae Ri Yoon、Jerry Gaylord、Sung Shin
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>3D动画预演：</span>Matthew Mead、Emily Hsu、Jared Mayberry、Cathy Blanco、Crhsti Kugler、Michael Taranto、James Wright、Enrique Munoz、Kaz Shimada、Christopher Erickson、Ray Chih、Grham Cunningham
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>后期制作：</span>Jake Patton、Joanna Griebel、Aaron Woitas、Rebecca Lilienfeld、Hannah Dalrymple、Ed Decker
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>配音：</span>彭博、姜玉玲、符冲、吴迪
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>音效与音乐：</span>Paul Mnichini、Caroline Hernandez、Ariel Wang、Brian Johnson、Erik Magnus、Larry Peacock、John Thomas、Chris Battaglia、Derek Duke、Nicholas Papaleo、Neal Acree、Gary Summers、Nathan Nance、Isaac Hammons、Andy King、Andrea Toyias、Michael Roache、Ashley Collins、Alec Santos、Peter Steinbach
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>本地化：</span>Felice Huang、Thomas Floeter
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>创意开发：</span>Jeff Chamberlain、Venecia Duran、Phillip Hillenbrand、Brian Horn、George Krstic、Dennis Bredow、Sean Copeland、Madi Buckingham、Jacob Rivera、Claver Knovick、Tim Loughran、Shannon Eric Denton
                                </div>
                                <hr className={classes.contentDivider} style={{marginTop:'20px'}}/>
                                <div className={classes.contentTitle}>
                                    玛卓克萨斯制作人员名单
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal'}}>
                                    <div>
                                        <span style={{fontWeight:'700'}}>导演：</span>Brian Horn
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>制作：</span>Taka Yasuda
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>编剧：</span>Christie Golden
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>美术指导：</span>Laurel Austin
                                    </div>
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>作画：</span>Adam Baines、Bayard Wu、Jasmine Goggins、Josh Tallman、Jungah Lee、Laurent Pierlot、Will Murai
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>分镜：</span>Mike Koizumi、Jerry Gaylord
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>3D动画预演：</span>Matthew Mead、Emily Hsu、Jared Mayberry、Cathy Blanco、Christi Kugler、Michael Taranto、James Wright、Enrique Munoz、Kaz Shimada、Scott、Trosclair、Jon Styles、Graham Cunningham
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>后期制作：</span>Jake Patton、Joanna Griebel、Aaron Woitas、Rebecca Lilienfeld、Hannah Dalrymple、Ed Decker
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>配音：</span>姜玉玲、许宗哲、贾邱
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>音效与音乐：</span>Paul Menichini、Caroline Hernandez、Ariel Wang、Brian Johnson、Erik Magnus、Larry Peacock、John Thomas、Chris Battaglia、Derek Duke、Nicholas Papaleo、Neal Acree、Gary Summers、Nathan Nance、Isaac Hammons、Andy King、Andrea Toyias、Michael Roache、Ashley Collins、Alec Santos、Peter Steinbach
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>本地化：</span>Felice Huang、Thomas Floeter
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>创意开发：</span>Jeff Chamberlain、Venecia Duran、Phillip Hillenbrand、Brian Horn、George、Krstic、Dennis Bredow、Sean Copeland、Madi Buckingham、Jacob Rivera、Claver Knovick、Tim Loughran、Shannon Eric Denton
                                </div>
                                <hr className={classes.contentDivider} style={{marginTop:'20px'}}/>
                                <div className={classes.contentTitle}>
                                    晋升堡垒制作人员名单
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal'}}>
                                    <div>
                                        <span style={{fontWeight:'700'}}>导演：</span>Terran Gregory
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>制作：</span>Taka Yasuda
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>编剧：</span>Andrew Robinson
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>美术指导：</span>Laurel Austin
                                    </div>
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>作画：</span>Adam Baines、Jasmine Goggins、Josh Tallman、Jungah Lee、Laurent Pierlot
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>分镜：</span>Ted Boonthanakit、Ae Ri Yoon、Jerry Gaylord、Sung Shin
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>3D动画预演：</span>Matthew Mead、Emily Hsu、Jared Mayberry、Cathy Blanco、Crhsti Kugler、Michael Taranto、James Wright、Enrique Munoz、Kaz Shimada、Christopher Erickson、Ray Chih、Grham Cunningham
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>后期制作：</span>Jake Patton、Joanna Griebel、Aaron Woitas、Rebecca Lilienfeld、Hannah Dalrymple、Ed Decker
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>配音：</span>彭博、姜玉玲、符冲、吴迪
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>音效与音乐：</span>Paul Mnichini、Caroline Hernandez、Ariel Wang、Brian Johnson、Erik Magnus、Larry Peacock、John Thomas、Chris Battaglia、Derek Duke、Nicholas Papaleo、Neal Acree、Gary Summers、Nathan Nance、Isaac Hammons、Andy King、Andrea Toyias、Michael Roache、Ashley Collins、Alec Santos、Peter Steinbach
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>本地化：</span>Felice Huang、Thomas Floeter
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>创意开发：</span>Jeff Chamberlain、Venecia Duran、Phillip Hillenbrand、Brian Horn、George Krstic、Dennis Bredow、Sean Copeland、Madi Buckingham、Jacob Rivera、Claver Knovick、Tim Loughran、Shannon Eric Denton
                                </div>
                                <hr className={classes.contentDivider} style={{marginTop:'20px'}}/>
                                <div className={classes.contentTitle}>
                                    玛卓克萨斯制作人员名单
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal'}}>
                                    <div>
                                        <span style={{fontWeight:'700'}}>导演：</span>Brian Horn
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>制作：</span>Taka Yasuda
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>编剧：</span>Christie Golden
                                    </div>
                                    <div>
                                        <span style={{fontWeight:'700'}}>美术指导：</span>Laurel Austin
                                    </div>
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>作画：</span>Adam Baines、Bayard Wu、Jasmine Goggins、Josh Tallman、Jungah Lee、Laurent Pierlot、Will Murai
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>分镜：</span>Mike Koizumi、Jerry Gaylord
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>3D动画预演：</span>Matthew Mead、Emily Hsu、Jared Mayberry、Cathy Blanco、Christi Kugler、Michael Taranto、James Wright、Enrique Munoz、Kaz Shimada、Scott、Trosclair、Jon Styles、Graham Cunningham
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>后期制作：</span>Jake Patton、Joanna Griebel、Aaron Woitas、Rebecca Lilienfeld、Hannah Dalrymple、Ed Decker
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>配音：</span>姜玉玲、许宗哲、贾邱
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>音效与音乐：</span>Paul Menichini、Caroline Hernandez、Ariel Wang、Brian Johnson、Erik Magnus、Larry Peacock、John Thomas、Chris Battaglia、Derek Duke、Nicholas Papaleo、Neal Acree、Gary Summers、Nathan Nance、Isaac Hammons、Andy King、Andrea Toyias、Michael Roache、Ashley Collins、Alec Santos、Peter Steinbach
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>本地化：</span>Felice Huang、Thomas Floeter
                                </div>
                                <div className={classes.contentText} style={{fontStyle:'normal',marginTop:'20px'}}>
                                    <span style={{fontWeight:'700'}}>创意开发：</span>Jeff Chamberlain、Venecia Duran、Phillip Hillenbrand、Brian Horn、George、Krstic、Dennis Bredow、Sean Copeland、Madi Buckingham、Jacob Rivera、Claver Knovick、Tim Loughran、Shannon Eric Denton
                                </div>
                                <div style={{display:'flex',alignItems:'center',margin:'36px 0'}}>
                                    <LocalActivityIcon style={{fontSize:'12px',color:'#ebdec2'}}/>
                                    &nbsp;
                                    <span style={{fontSize:'12px',color:'#ebdec2'}}>TAGS</span>
                                    <a href={'#'} className={classes.mobile}>MOBILE</a>
                                </div>
                                <div style={{height:'4px',background:'black',position:'absolute',width:'100%',left:'0',marginTop:'56px'}}></div>
                                <div className={classes.bottomBackground}>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
                                        <div style={{fontSize:'17px',fontWeight:'700',color:'#ebdec2'}}>
                                            关注魔兽
                                        </div>
                                        <svg t="1601884231130" className={classes.icon} viewBox="0 0 1024 1024" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" p-id="3299"
                                        >
                                            <path
                                                d="M758.4768 503.1424a37.376 37.376 0 0 1-22.912-10.4192 11.3408 11.3408 0 0 1-1.8432-12.8l3.6864-5.8368a13.2864 13.2864 0 0 0 2.3808-3.4816c0.768-1.5616 2.3552-4.864 4.736-9.9328 2.0992-4.9152 3.84-9.984 5.248-15.1296 1.0752-5.0688 2.1248-11.264 2.9184-18.6368 0.768-6.9888 0.512-14.08-0.7936-20.992a89.1648 89.1648 0 0 0-6.8608-21.5296 72.96 72.96 0 0 0-14.7456-20.992 78.848 78.848 0 0 0-42.6496-20.9664 160.1536 160.1536 0 0 0-52.6336-0.5888c-16.7936 2.5088-33.408 5.9904-49.7664 10.4192-15.7952 4.2752-28.416 8.32-38.7072 12.2112l-15.2576 7.0144a143.104 143.104 0 0 1-19.2 4.6592 22.9888 22.9888 0 0 1-11.8784-0.5888 33.8432 33.8432 0 0 1-6.3232-3.5328 9.3952 9.3952 0 0 1-1.8176-8.1408c0.512-4.2752 0.768-7.9872 1.28-11.0848a117.248 117.248 0 0 1 2.9184-14.5664c1.5872-6.6048 2.6368-11.8528 3.4304-15.616a165.0944 165.0944 0 0 0-1.8432-26.24 131.072 131.072 0 0 0-7.3728-27.3408 59.904 59.904 0 0 0-17.1264-24.448 87.168 87.168 0 0 0-28.16-15.1296 108.032 108.032 0 0 0-43.6992-3.5328c-20.864 2.176-41.3696 6.8608-61.0816 14.0032a375.7056 375.7056 0 0 0-82.944 41.3184 498.2784 498.2784 0 0 0-73.1648 57.088 1385.4208 1385.4208 0 0 0-56.8832 57.6512 898.816 898.816 0 0 0-39.7312 45.44l-12.9024 18.6368a390.6304 390.6304 0 0 0-57.3952 100.1728A213.76 213.76 0 0 0 0 635.9296v24.448a249.6 249.6 0 0 0 100.0448 171.8272 375.7056 375.7056 0 0 0 89.4976 46.592c32.1024 12.1856 65.2288 21.5552 98.9952 27.9552 33.0752 6.016 66.4832 10.0864 100.0448 12.2112a606.7968 606.7968 0 0 0 179.5584-13.3888c61.44-13.312 120.064-37.1712 173.2096-70.4768a287.616 287.616 0 0 0 112.9472-119.8592c12.416-23.8592 19.456-50.0992 20.5312-76.9024a112.1536 112.1536 0 0 0-12.3648-58.8032 150.2464 150.2464 0 0 0-33.1776-40.192 166.6048 166.6048 0 0 0-38.7072-25.6512c-10.2144-4.7872-20.992-8.2944-32.1024-10.4192v-0.128zM401.4848 865.3312a367.2064 367.2064 0 0 1-214.8352-48.9216c-58.9568-36.48-88.448-82.688-88.448-138.624 0-55.1424 29.4912-102.6816 87.936-142.6944a459.1872 459.1872 0 0 1 430.6944-23.8848c58.4448 31.8464 87.68 75.3408 87.68 130.4576 0 55.9104-29.8496 106.1888-89.5232 150.8608a376.5504 376.5504 0 0 1-213.504 72.7808v0.0256z m-33.9712-322.688c-20.992 1.8944-41.5488 7.168-60.8 15.6416a135.3472 135.3472 0 0 0-42.1376 27.9552 175.2832 175.2832 0 0 0-25.8048 33.8688c-6.6048 11.0848-11.5712 23.04-14.72 35.5328a233.6 233.6 0 0 0-6.3232 54.7072l1.024 9.344v4.6592c0.4096 4.7104 1.2032 9.3952 2.3808 13.952 1.4336 6.656 3.6352 13.1072 6.6048 19.2512 3.456 7.04 7.9872 13.5168 13.4144 19.2 6.2976 7.0656 13.7728 13.0048 22.1184 17.5104a219.8528 219.8528 0 0 0 144 22.6816 181.7088 181.7088 0 0 0 107.6736-66.9696 102.016 102.016 0 0 0 21.5808-48.9216 130.9696 130.9696 0 0 0-2.3552-58.8032 145.8688 145.8688 0 0 0-26.3168-54.1952 118.5024 118.5024 0 0 0-55.552-37.8624 182.2464 182.2464 0 0 0-84.7872-7.552z m-42.112 220.1856a54.0416 54.0416 0 0 1-25.2672-1.7408 174.7456 174.7456 0 0 1-10.5472-4.0704 24.2176 24.2176 0 0 1-8.704-6.4 95.5392 95.5392 0 0 1-6.2976-8.1664 27.776 27.776 0 0 1-4.736-9.3184 31.3344 31.3344 0 0 1-1.8432-11.0848 49.152 49.152 0 0 1 7.1168-25.0368 66.816 66.816 0 0 1 19.2-20.992 53.504 53.504 0 0 1 27.648-9.9072c6.7584-0.768 13.568-0.5632 20.2752 0.5888 6.016 0.9216 11.8016 2.8928 17.1008 5.8112 4.5056 2.6112 8.6528 5.7344 12.3904 9.344 3.456 3.4048 5.9904 7.6032 7.3728 12.2112 1.6128 4.864 2.4064 9.984 2.3552 15.1296 0 8.704-2.56 17.1776-7.3728 24.448a70.9632 70.9632 0 0 1-20.5312 19.7888c-8.448 5.376-18.1248 8.6016-28.16 9.3184v0.0768z m99.5072-83.8656a26.5216 26.5216 0 0 1-17.1008 5.1968 13.4656 13.4656 0 0 1-12.1088-7.552l-2.3808-4.6592a10.5216 10.5216 0 0 1-1.3056-4.6592v-4.5056a12.5952 12.5952 0 0 1 1.3056-5.8112l2.3808-4.6848a7.3472 7.3472 0 0 1 3.4048-3.5072l3.4304-4.6592a24.832 24.832 0 0 1 18.176-5.8112 20.5056 20.5056 0 0 1 15.2576 19.7888c-0.4864 3.8656-1.6384 7.6288-3.4304 11.0848a48.768 48.768 0 0 1-7.6288 9.9072v-0.128z m415.4368-243.4816a24.6528 24.6528 0 0 0 12.9024-3.5072c3.7632-2.0992 6.912-5.12 9.216-8.704 2.304-3.3536 3.9168-7.1168 4.736-11.0848a4.736 4.736 0 0 0 1.3056-3.5328c9.216-88.576-21.8368-139.008-93.696-151.424a165.6832 165.6832 0 0 0-58.4704-1.152 24.4992 24.4992 0 0 0-14.208 4.0704c-3.9168 2.8672-7.296 6.4-9.984 10.4192a25.1392 25.1392 0 0 0-3.968 13.3632c-0.1792 7.424 2.7648 14.592 8.1664 19.7888 5.248 5.3248 12.4928 8.2688 19.9936 8.192 60.8256-14.0288 93.568 5.376 98.2016 58.24 1.6384 12.4672 0.8192 25.1136-2.3552 37.2992-0.0768 7.3984 2.8672 14.5152 8.1408 19.7632 5.2736 5.3248 12.4928 8.2688 20.0192 8.1664v0.1024z m-20.0192-328.3968a353.024 353.024 0 0 0-137.9328 4.6592 3.4304 3.4304 0 0 0-2.3808 1.152l-1.3056 2.3296-1.0496 1.152a37.888 37.888 0 0 0-21.0688 14.592c-5.3248 6.8352-8.192 15.232-8.1664 23.8592-0.256 10.8544 3.9168 21.376 11.5968 29.1072 7.3728 7.5264 17.5616 11.776 28.16 11.6736h3.4304a25.4208 25.4208 0 0 0 5.248-1.1264c2.944-0.7936 5.9392-1.3824 8.96-1.7664 3.4048-0.512 6.7328-1.28 9.984-2.3296 3.4304-1.1776 6.6048-2.3552 9.216-3.5072 5.12-1.4848 10.496-2.0736 15.8208-1.7408 9.5744 0.1024 19.1488 0.6912 28.672 1.7408 12.7744 1.536 25.3184 4.4544 37.4016 8.7296 14.08 4.8384 27.8272 10.6752 41.0624 17.4848 14.9248 7.8848 28.7488 17.664 41.088 29.1072a195.6352 195.6352 0 0 1 35.5328 43.1104 189.696 189.696 0 0 1 11.8528 132.8896 4.2496 4.2496 0 0 1-0.7936 2.3552c-0.256 0.768-0.7936 2.7136-1.5872 5.8112-0.768 3.072-1.5872 5.9648-2.3552 8.704-0.7936 2.7392-1.5872 6.2208-2.3808 10.4448a63.232 63.232 0 0 0-1.3056 11.0592c-0.1792 6.3744 1.9712 12.5696 6.0416 17.4848 3.7376 4.6592 8.7808 8.0896 14.4896 9.9072 6.656 2.0224 13.568 2.9952 20.5312 2.8928 10.496 0.0256 20.5568-4.1728 27.8784-11.648 7.296-7.4752 11.2128-17.5616 10.8288-27.9552 8.832-28.16 14.1312-57.3184 15.7952-86.784 1.3568-24.3968-0.5888-48.896-5.8112-72.8064a246.5536 246.5536 0 0 0-22.8864-58.8032 204.2368 204.2368 0 0 0-35.0208-46.592 294.912 294.912 0 0 0-44.4928-34.9696 296.448 296.448 0 0 0-95.0528-40.192v-0.0256z"
                                                p-id="3300"/>
                                        </svg>
                                        <svg t="1601886807009" className={classes.icon} viewBox="0 0 1280 1024" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" p-id="4057" style={{marginLeft:'25px',width:'32px'}}>
                                            <path
                                                d="M858.148572 309.753124C872.728381 309.753124 887.070474 310.852936 901.491809 312.42409 862.665144 133.155348 669.403428 0 448.725335 0 202.057143 0 0 166.620943 0 378.334024 0 500.491295 67.193905 600.809513 179.553524 678.73878L134.704762 812.522593 291.596191 734.593326C347.696763 745.512852 392.704 756.825165 448.725335 756.825165 462.829716 756.825165 476.775619 756.1967 490.563046 755.17545 481.846856 725.402071 476.696381 694.293212 476.696381 661.848868 476.775619 467.497047 645.077335 309.753124 858.148572 309.753124L858.148572 309.753124ZM616.947809 189.167012C650.861716 189.167012 673.127619 211.241733 673.127619 244.707328 673.127619 278.015805 650.861716 300.3262 616.947809 300.3262 583.430093 300.3262 549.674665 278.015805 549.674665 244.707328 549.674665 211.163177 583.350856 189.167012 616.947809 189.167012L616.947809 189.167012ZM302.927237 300.3262C269.251046 300.3262 235.337143 278.015805 235.337143 244.707328 235.337143 211.241733 269.251046 189.167012 302.927237 189.167012 336.603428 189.167012 358.948572 211.163177 358.948572 244.707328 358.948572 278.015805 336.603428 300.3262 302.927237 300.3262L302.927237 300.3262ZM1267.809526 656.506941C1267.809526 478.652242 1088.256 333.713234 886.595046 333.713234 673.048381 333.713234 504.984381 478.730803 504.984381 656.506941 504.984381 834.832988 673.127619 979.300652 886.595046 979.300652 931.285335 979.300652 976.371809 968.224012 1021.220572 957.068815L1144.277335 1024 1110.521907 912.762255C1200.615619 845.673953 1267.809526 756.825165 1267.809526 656.506941L1267.809526 656.506941ZM762.825144 600.809513C740.559237 600.809513 717.976381 578.813348 717.976381 556.345841 717.976381 534.192558 740.559237 511.882163 762.825144 511.882163 796.897526 511.882163 819.004954 534.192558 819.004954 556.345841 819.004954 578.813348 796.897526 600.809513 762.825144 600.809513L762.825144 600.809513ZM1009.651809 600.809513C987.544381 600.809513 965.040763 578.813348 965.040763 556.345841 965.040763 534.192558 987.465144 511.882163 1009.651809 511.882163 1043.407237 511.882163 1065.831619 534.192558 1065.831619 556.345841 1065.831619 578.813348 1043.407237 600.809513 1009.651809 600.809513L1009.651809 600.809513Z"
                                                p-id="4058"/>
                                        </svg>
                                        <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 64 64" focusable="false" style={{width:'32px',marginLeft:'25px'}}>
                                            <path xmlns="http://www.w3.org/2000/svg" d="M32.824 18.186c.089-.167.167-.341.232-.522l.031-.07-.006-.003a3.993 3.993 0 00-7.266-3.231l-.013-.006-.085.191a3.875 3.875 0 00-.124.279l-5.621 12.641-7.53-12.658a3.977 3.977 0 00-.614-1.032l-.017-.029-.005.003a3.993 3.993 0 00-6.775 4.031l-.013.008.05.083c.14.329.324.635.543.912l10.429 17.53-4.251 9.561a3.842 3.842 0 00-.179.404l-.131.295.029.013a3.993 3.993 0 007.227 3.214l.029.013.133-.299c.069-.135.132-.274.186-.418l13.741-30.91zm25.212 16.079l-6.891-6.891 6.015-6.015a3.993 3.993 0 10-5.321-5.953l-.004-.004-9.235 9.237v-6.594h-.004a3.872 3.872 0 10-7.734.361v19.331a3.873 3.873 0 007.732.444h.006v-8.057l9.83 9.83.002-.002a3.993 3.993 0 105.604-5.687z" id="social-youku"/>
                                        </svg>
                                    </div>
                                </div>
                                <div style={{marginTop:'240px',textAlign:'center'}}>
                                    <Button className={classes.bottomLogoButton} disableRipple>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 124 66" focusable="false" aria-hidden="true"
                                             className={classes.bottomLogo}>
                                            <path d="M75.81,45.29a5.38,5.38,0,0,0,.44,1.41v4.07l-0.07,0a4,4,0,0,0-.36.27,0.89,0.89,0,0,1,0,.13,1.62,1.62,0,0,1,0,.19l0,0.14H69.26l0-.08a3.85,3.85,0,0,0-.27-0.39l-2.15-.23a4.34,4.34,0,0,1-1.65,1.09H65.09c-1.64,0-2.56.08-3.5,0.08a10.93,10.93,0,0,1-2.52.81H59l0-.05a1.57,1.57,0,0,1-.44-1.12c0-.32.07-0.59,0.07-0.73V49.19l0.07-.05a1.46,1.46,0,0,0,.4-0.32,0.83,0.83,0,0,0,.13-0.5A3.17,3.17,0,0,0,59,47.46l0-.12,0.1-.07a2,2,0,0,0,.81-0.76A1.35,1.35,0,0,0,60,46a3.87,3.87,0,0,0-.11-0.85l0-.12,0.1-.06a1.47,1.47,0,0,0,.39-0.31,0.8,0.8,0,0,0,.11-0.46,2.93,2.93,0,0,0-.14-0.79V43.3c0-.24.32-0.68,0.44-1.1a4.83,4.83,0,0,0,.15-1.3,12.72,12.72,0,0,0-.16-1.82,2.6,2.6,0,0,0-.42-1A9.72,9.72,0,0,1,59.89,35a23.57,23.57,0,0,1,.43-4.25l2.59-6.89a2.92,2.92,0,0,1-.42-0.49,0.72,0.72,0,0,1,0-.24c0-.16,0-0.24,0-0.4V22.62l0.05-.05a2.2,2.2,0,0,0,.6-1.28c0-.23,0-0.37,0-0.5s0-.13,0-0.22c0.1-.51,1.17-1.81,1.3-3a4.91,4.91,0,0,0,0-.54c0-.37,0-0.72,0-0.73a19.93,19.93,0,0,1,3-5.69V9l0.07,0a0.78,0.78,0,0,0,.36-0.43h0c0-.13,0,0-0.23-0.31h-2.3l0-.08A1.87,1.87,0,0,0,65,7.71a0.92,0.92,0,0,0-.68-0.23,11.18,11.18,0,0,0-1.47.28,1.41,1.41,0,0,0-.69.89,11.79,11.79,0,0,0-.78,2.83c-0.41,2.59-.84,2.95-1.39,3H59.77a0.58,0.58,0,0,0-.56.39L59.11,15,59,14.86c-0.19-.17-0.44-0.41-0.52-0.45l-0.11-.07,0-.12a2.66,2.66,0,0,0,.21-1c0-.46-0.21-0.7-0.23-1.2A1.72,1.72,0,0,1,59,11V3H73.89l0,0.08c0.26,0.43.28,0.41,0.29,0.4h0.34l0.15,0V4l0,0c-0.39.44-.53,2-1.79,3.23a6.24,6.24,0,0,1,.06.81,2.9,2.9,0,0,1-.07.69,3.1,3.1,0,0,1-1.29,1.77,5.28,5.28,0,0,1,.07.81,2.57,2.57,0,0,1-.08.7c-0.3.75-.83,0.41-0.86,1.27,0,0-.24,1.65-0.46,2.7s-0.76,1.64-.75,2.43a2.51,2.51,0,0,0,0,.41l-0.13,4.24-0.07,0c-0.63.38-.52,2.81-1.66,4v1.51c-0.35.92-1,.87-1.29,2.05V35.6l-1.3,3.74c0,0.14.05,0.67,0.05,1.25a7.3,7.3,0,0,1-.06,1,10.71,10.71,0,0,1-1.35,3.3l-0.19.31a1,1,0,0,1,0,.11,5.21,5.21,0,0,1-.41,1.44,3.24,3.24,0,0,1-.39,1,0.45,0.45,0,0,0,.34.22,0.85,0.85,0,0,0,.29-0.38l0.08-.14,0.14,0.07a1.68,1.68,0,0,0,.75.17c0.48,0,1-.18,1.63-0.18,0.17,0,.2-0.15.25-0.49a1.84,1.84,0,0,1,.42-1.1c0.65-.69,2.09-0.83,2.41-1.08,1.76-1.22,2.48-.65,3.64-2.52l0.11-.17,0.15,0.14a3.67,3.67,0,0,1,.4.43h2.18l0,0.08A2.37,2.37,0,0,1,76.24,44,2.41,2.41,0,0,0,75.81,45.29Zm11-8.76a42.37,42.37,0,0,1-.19,5.28v0.06l-0.05,0a6.58,6.58,0,0,0-.87,2.16,7.56,7.56,0,0,1-1.23,2.69v2.47l-0.07.05c-0.5.31-.58,2.21-1.23,3v1.54l-0.07.05a2.76,2.76,0,0,0-.36.28v2l-0.07.05a1.27,1.27,0,0,1-.75.5,0.25,0.25,0,0,1-.22-0.13,1.18,1.18,0,0,0-.24.11l-0.24.14v-2.7l-1.31-4.26V48.57c0.08-1-2.13-1.71-2.16-3.75V44.76l0,0A11.45,11.45,0,0,0,80.56,38h0c0.07-.26-1.11-1.11-2.37-1.77a21.09,21.09,0,0,1-2.83-1.68H74.57l0.37,1.09V38c0.58,0.15.95,0.86,1.31,0.91a0.26,0.26,0,0,1,.23.24,13.53,13.53,0,0,0-.68,1.24l0,0.15H75.63s-1.33-.09-2.41-0.09a5.89,5.89,0,0,0-1.21.08c-2.06.69-4.4,1.57-4.41,1.57l-0.13,0L67.4,42c-0.56-.94-0.09-0.68-0.61-1.43l-0.07-.1,0.07-.09a9,9,0,0,1,1.54-1.76,4.34,4.34,0,0,1,.4-1.76c0.45-.67,1.43-0.86,1.33-1.09a0.68,0.68,0,0,0-.36-0.33l-0.09-.06v-0.1s0.16-1.38.3-2.13A2.49,2.49,0,0,1,70,32.75a4.2,4.2,0,0,1-.21-1.19,1.36,1.36,0,0,1,.27-0.89,2,2,0,0,1,.39-0.32V28.46l0.07,0a0.57,0.57,0,0,0,.36-0.57c0-.15,0-0.07-0.13-0.16a0.57,0.57,0,0,1-.33-0.6,1.81,1.81,0,0,1,0-.34,3,3,0,0,0,.07-0.64c0-.42-0.11-0.69-0.11-1.08a1.8,1.8,0,0,1,.09-0.57A7.64,7.64,0,0,1,71.37,23a6.34,6.34,0,0,0,.49-2.43v-0.1l0.08,0c1-.51.4-2.7,1.16-4.45a7,7,0,0,1,1.19-2.12,1,1,0,0,0,0-.15c0-.31-0.15-0.57-0.16-0.91a0.73,0.73,0,0,1,.17-0.48,1.67,1.67,0,0,1,.42-0.34,14.16,14.16,0,0,1,.94-2.44,3.5,3.5,0,0,1,.85-1.28V6.33l0.07-.05a0.73,0.73,0,0,0,.33-0.37,1.36,1.36,0,0,1,.58-0.57l0,0h0c0.4,0,.45-0.4.46-1,0-.16,0-0.32,0-0.49,0-.6.1-1.34,0.94-1.34,1.45,0.07,1.28,2.43,1.45,2.67,1.16,2.53,1.48,2.13,1.53,2.76V9.23c0,1.09,1.57,5.18,1.58,5.2l1.36,5.36c0.14,0.12.25,0.22,0.38,0.31l0.07,0V22a1.19,1.19,0,0,1,.47.84c0,0.19-.06.31-0.05,0.39a0.64,0.64,0,0,0,.38.47l0.07,0v2.55l-0.12,0s0,0.08,0,.13a35.42,35.42,0,0,0,.58,4.65l0,0v0.08C86.77,31.92,86.82,34.23,86.82,36.54ZM76,30.06a3.2,3.2,0,0,1-.06.76l0,0.06a7.63,7.63,0,0,1,.79,0,5.84,5.84,0,0,1,1.27.13c1.26,0.27,2,1.15,2.79,1.4h0.37c0-.6.06-2.79,0.06-4.53,0-1,0-1.8-.06-2.12a3.33,3.33,0,0,1-.34-1.57,2.87,2.87,0,0,0-.48-1.66c-0.51-.49-1.18-0.23-1.79-0.85a4.78,4.78,0,0,1-.79-1.46l-0.07,2v0.08l-0.07,0a1.53,1.53,0,0,0-.48.9,1,1,0,0,1-.75.75,8.09,8.09,0,0,1-.43,2.82,4,4,0,0,0,0,.63C75.87,28.17,76,29.27,76,30.06ZM58.05,37.83l-0.18.05c-0.67.15-.36,0.69-0.92,1.28a7.75,7.75,0,0,0-.13,1.91c0,1.93.15,4.55,0.15,4.55V45.8H56.8a3.12,3.12,0,0,0-1.59.86l-0.05.08H50.21l-0.05-.08c-0.28-.45-0.28-0.44-0.31-0.42s-0.23,0-.52,0a0.87,0.87,0,0,0-.83.4,0.92,0.92,0,0,1-.81.54h0a3.14,3.14,0,0,1-1.45-.7H42.85l0-.08a1.42,1.42,0,0,1-.46-0.79,0.92,0.92,0,0,1,.3-0.42L43,44.86V42l0.07,0c0.41-.3.37-0.27,0.38-0.35s0-.17,0-0.33a0.24,0.24,0,0,1,0-.05l-0.07-.17c-0.06-.14-0.14-0.32-0.23-0.5a3,3,0,0,0-.49-0.78l-0.14-.1,0.1-.13a1.27,1.27,0,0,0,.27-0.77A1.33,1.33,0,0,0,42.6,38l0,0v0a4.73,4.73,0,0,1,0-.7c0-1.37.49-3,.48-3.8V33.27l0.07-.05c0.43-.25.29-1.66,0.81-2.75a12.93,12.93,0,0,1,1.52-2.1,6.19,6.19,0,0,1,1.84-3.64c0.1-.48.88-4.34,1.64-5.51a5.35,5.35,0,0,1,.59-0.47l0.48-.35c0-.25.3-1,1.73-2.28a6.23,6.23,0,0,1-.21-1.52,3.12,3.12,0,0,1,.25-1.31l0,0,0,0c0.94-.67,1.49-2.19,3-3.57V6.72L50,6.68c-0.71.67-2.59,0.74-2.61,3.23v0.17H47.18a2.31,2.31,0,0,0-.94.35,1.12,1.12,0,0,0-.63.77V14.7a5.1,5.1,0,0,1-.89,1.73l-0.11.17-0.15-.14a1,1,0,0,1-.41-0.77c0-.17,0-0.29,0-0.37a0.61,0.61,0,0,0-.37-0.49l-0.06,0V14.73s-0.13-.9-0.23-1.47a1.69,1.69,0,0,0-.13-0.65l-0.11-.07,0-.12a6.86,6.86,0,0,0,.4-2,1.68,1.68,0,0,0-.36-1.18,2.35,2.35,0,0,0-.41-0.33l-0.07,0V4.69l0,0a2.15,2.15,0,0,0,.4-1s0-.06,0-0.09l0-.19h0.19c6.12,0,6.68,0,12.69,0h0.17V5.85c0,0.37.4,0.43,0.43,1.05v7.92l-0.06.05a1.9,1.9,0,0,0-.53,1.48,4.68,4.68,0,0,0,.15,1.16l0,0.11-0.1.07c-1.26.88-1.91,4.39-2.67,5.29v2l-0.1,0s-1.75.76-2.08,1.66a2.25,2.25,0,0,0-.11.78,6,6,0,0,0,.12,1.11l0,0.14-0.13.05c-1.43.54-3.73,7-3.69,7.34v1.17l-0.18,0,0.09,0.09v0a1.18,1.18,0,0,0-.08.16c-0.07.15-.15,0.37-0.26,0.64-0.2.54-.46,1.26-0.73,2A24.21,24.21,0,0,1,45,43.66C45.22,44,45.24,44,45.26,44s0.18,0,.39,0c0.38,0,.54-0.22,2.2-1a5.24,5.24,0,0,0,2.06-.47,12.19,12.19,0,0,0,1.34-1.92,3.67,3.67,0,0,1,2.48-1.83,3.77,3.77,0,0,1,.79-1.83l0.15-.15,0.1,0.18a2.89,2.89,0,0,0,.23.35c1.38-.64.76-1.31,1.48-2.18l0-.06h1.22v0.17s0,0.17,0,.43A6.9,6.9,0,0,0,58,37.65Zm-37,2.91c0,0.53.3,1.58,0.3,2.57a3.68,3.68,0,0,1-.06.69,12.09,12.09,0,0,1-.75,2.18,14.07,14.07,0,0,0-1.25,2.18,13.75,13.75,0,0,0-.6,3v0.1l-0.09,0A20.29,20.29,0,0,0,15.85,53a5.79,5.79,0,0,0-2,1.82l0,0.1h-0.1a21.65,21.65,0,0,0-2.75.55,0.25,0.25,0,0,0-.12.05,0.57,0.57,0,0,1-.42.26c-0.5-.09-0.61-0.67-0.95-0.63a1,1,0,0,0-.64.37C8.63,56,8,56,7.26,56a18.18,18.18,0,0,1-2.63-.25,1.21,1.21,0,0,1-.52.08c-0.47,0-1.08-.1-1.41-0.1H2.53L2.44,56l-0.15-.14c-0.19-.17-0.44-0.4-0.52-0.45l-0.28-.18,0.31-.11a6,6,0,0,0,1.31-.69h0l0-.07c0-.07.07-0.18,0.11-0.3s0.18-.61.28-1c0.21-.8.42-1.77,0.56-2.51,0-2.54.15-3.84,0.15-5.17a16.09,16.09,0,0,0-.15-2.19c0-.31-0.18-2.65-0.38-4.34,0-2.74.16-5.55,0.16-7.21,0-.32,0-0.59,0-0.81V30.59H4a0.62,0.62,0,0,0,.52-0.38L4.44,28l-0.33-.7,0-3.17a2.4,2.4,0,0,1,.41-0.93,2,2,0,0,0,.07-0.66c0-.42,0-0.87-0.05-1L4.1,20.78v-11l0.07,0c0.41-.3.41-0.3,0.4-0.36s0-.25,0-0.56,0-.47,0-0.51h0A2.32,2.32,0,0,1,4.31,8L3.94,8a0.17,0.17,0,0,1-.15.1A0.33,0.33,0,0,1,3.6,8.06H3.45a0.17,0.17,0,0,1-.13-0.17,0.24,0.24,0,0,1,.06-0.13L3.16,7.5,1.72,6.13a1.16,1.16,0,0,0-.32-0.4,0.32,0.32,0,0,1-.15-0.29c0-.09,0-0.21,0-0.45a1.11,1.11,0,0,1,.09-0.68,2,2,0,0,0,.37-0.46l0-.08H4.08a5.07,5.07,0,0,1,1.73-.39c0.81-.1,1.65-0.16,1.93-0.16L10,3.29c2.31,0,3.16-.23,4.37-0.23a12,12,0,0,1,2,.18l0.11,0,0,0.11A2.55,2.55,0,0,0,17.68,4.6l0.25,0a2,2,0,0,1,1.13.32A6.43,6.43,0,0,1,21.3,9.49c0,1.24.28,2.41,0.28,3.33a1.81,1.81,0,0,1-.42,1.34l-1.61,3A25.65,25.65,0,0,1,17,20.61a1.28,1.28,0,0,0,.49.44A3.75,3.75,0,0,0,19,21.5a0.64,0.64,0,0,1,.56.67,2.64,2.64,0,0,1-.5,1.27,0.17,0.17,0,0,0,0,.13,0.87,0.87,0,0,0,.11.4,0.32,0.32,0,0,0,.16.17s0,0,.07-0.07l0.11-.17L19.62,24a1.91,1.91,0,0,1,.77,1c0,0.06-.12-0.06.4,0.35l0.09,0.07,0,0.11a14.22,14.22,0,0,0-.36,3,5.33,5.33,0,0,0,.35,2.08c0.12,0.36.85,0.55,0.92,1.09a0.5,0.5,0,0,1-.14.33c0,0.16,0,.57,0,1,0,0.28,0,.58,0,0.83,0,0.06,0,.11,0,0.17,0,1.36.25,2.67,0.25,3.86a4,4,0,0,1-.74,2.56A0.45,0.45,0,0,0,21.09,40.74ZM15.15,10.85a0.2,0.2,0,0,1,.09-0.21l0.63-.44c-0.71-.24-1.34.19-1.94-1h-0.2l-1.92.28,0.12-.27A0.43,0.43,0,0,0,12,9l-0.16.08a1.67,1.67,0,0,0-.1.61,0.65,0.65,0,0,1-.43.56v8.28a1.43,1.43,0,0,1,.44-0.08h0a0.86,0.86,0,0,1,.47.14c0.86-.26.5-2.37,3-2.67,0-.22,0-0.57,0-1,0-1,0-2.17.42-2.64A7.7,7.7,0,0,1,15.15,10.85Zm0.35,29.51c0-.29.16-0.55,0.15-0.73a0.33,0.33,0,0,0-.19-0.3l-0.21-.13,0.2-.14a0.37,0.37,0,0,0,.16-0.35c0-.51-0.57-1.41-0.58-2.26a1.29,1.29,0,0,1,.52-1.07,1.57,1.57,0,0,0-.31-1.31,1.53,1.53,0,0,1-.4-1.35c0-.48.43-1.34,0.42-1.84a0.3,0.3,0,0,0-.12-0.3L15,30.5l0.07-.15a1,1,0,0,0,.11-0.46,1.69,1.69,0,0,0-.41-1l-0.24-.26,0.35,0,0.11,0a2.78,2.78,0,0,1-.34-0.74,0.28,0.28,0,0,1,.12-0.24,0.21,0.21,0,0,0,.06-0.16,2.31,2.31,0,0,0-.68-1,10.4,10.4,0,0,1-1.79-1.38L11.29,24c0,0.56,0,1.58,0,2.52,0,0.68,0,1.31,0,1.7v0.05l0,0A1.79,1.79,0,0,0,11,29.32a9.26,9.26,0,0,0,.27,2v0l-0.46,2.23-0.08,0a0.48,0.48,0,0,0-.33.45s0,0,0,.05a0.5,0.5,0,0,0,.33.48l0.1,0v8.17l0,0.05a1,1,0,0,0-.39.5c0,0.15,0,.26-0.06.33a0.32,0.32,0,0,1-.07.15c0,0.42,0,1.38,0,3.45,0,0,0,1.07.06,1.51l0,0a0.16,0.16,0,0,1,0,.11,5.8,5.8,0,0,1-.49,1l-0.31.57a6.05,6.05,0,0,0,1.16-.25l1-.92h0.06c0.73,0,1.65-1.55,2.26-2s0.34-2.27.61-3.71V43.53l0,0h0l0-.08c0-.07.07-0.18,0.11-0.3s0.18-.58.28-0.91a10,10,0,0,0,.34-1.62h0A0.56,0.56,0,0,1,15.51,40.35Zm89.4,7.42a1.25,1.25,0,0,1,.17.63,2.16,2.16,0,0,1-.18.8c-0.24.55-.08,0.7-1.12,5.74l0,0.18-0.17-.05a8.31,8.31,0,0,1-2-.84c-2.3-2.24-2.91-2.37-3.88-2.37H96.92l0-.12a0.43,0.43,0,0,1,0-.16c0-.78,1.3-3.71,1.53-5a40.06,40.06,0,0,0,.18-4.22,12.89,12.89,0,0,0,0-1.41v0a31.62,31.62,0,0,0-.69-3.86c-0.39-1.79-1.08-3.56-1.54-3.6l-0.15,0,0-.15c0.13-1,.41-2.44.41-3a0.4,0.4,0,0,0,0-.16c-0.64-1.21-1.92-3.62-2.66-4a5,5,0,0,1,.05.59,3.8,3.8,0,0,1-.51,1.65,2.77,2.77,0,0,0-.42,1,0.15,0.15,0,0,0,0,0v0l0,0h0v0.06c0,1.14,1.11,10.23,1.11,11.08v0.12L94,40.87l0,0a0.74,0.74,0,0,0-.09.12,0.66,0.66,0,0,0-.12.35,0.12,0.12,0,0,0,0,0,3.18,3.18,0,0,1,.38.77c0,0.53.09,1.16,0.09,1.8a7.12,7.12,0,0,1-.39,2.61c0.06,1,.45,3.34.45,4.47a2.36,2.36,0,0,1,0,.4v0l0,0a0.93,0.93,0,0,1-.39.34,5.76,5.76,0,0,1,.07.86,12.72,12.72,0,0,1-.41,2.84l-0.13.55-0.19-.53a11.55,11.55,0,0,0-3.69-5.17c-1.26-1.05-2.27-1.36-2.36-2,0,0,1.52-5.37,2.18-6a1.51,1.51,0,0,0,.09-0.63,9,9,0,0,0-.1-1.2A2.93,2.93,0,0,0,89,40.28l-0.08-.05v-0.1c0-.09,0-1.48,0-3.26,0-3.39,0-8.24,0-8.75a5.8,5.8,0,0,1-.16-0.87h0l-0.06,0-0.21-1.85c-0.18-.26-0.29-0.76-0.36-0.77l-0.07,0V24.46s0-.46,0-0.92c0-.2,0-0.41,0-0.57a1.76,1.76,0,0,1-.14-0.58,3.59,3.59,0,0,0-.12-0.64h0l-0.08-.05V21.59s0-.05,0-0.15a3.41,3.41,0,0,0-.21-1.27,2,2,0,0,1-.17-1,4.8,4.8,0,0,0-.09-0.87l-0.05,0,0-2.23a1.13,1.13,0,0,1-.45-0.75c0-.07,0-0.12,0-0.14a0.72,0.72,0,0,0-.36-0.34l-0.06,0V14.75a16.81,16.81,0,0,1-.1-2,16.87,16.87,0,0,1,.1-2V10.67l0,0c0.71-.7,2.7-1.7,4-3.54C90,7,89.15,6.74,89,6.7l-0.07.09a0.64,0.64,0,0,1-.32.26,1.59,1.59,0,0,1-.46.12A0.85,0.85,0,0,1,87.69,7L87.61,7V6.9A4,4,0,0,0,86,4.67C85.25,4,84.57,3.61,84.34,3.41l-1.58-.34,0-.33,6.27-.17a2,2,0,0,1,1.09-.29,0.73,0.73,0,0,1,.73.47h2.28l0,0,0.11,0L93.7,3l1.2,0.39L96.6,3.89H97a3.59,3.59,0,0,1,.53,0,4.18,4.18,0,0,1,2,1,6.76,6.76,0,0,0,1,.83h0.1l2.22,4.68a3.69,3.69,0,0,1,.08,1c0,0.8-.06,1.79-0.06,1.79v0.08l-0.06,0a1.94,1.94,0,0,0-.16.43,2.45,2.45,0,0,1-.2.54c0,0.24,0,.52,0,0.77,0,0.56,0,1,0,1.09-0.81,3.19-2.31,5.75-5.08,5.86,0,0.39,0,.63,0,0.79a0.61,0.61,0,0,1-.27.58h0.11c0.33,0,.6-0.12,1-0.13,0.51,0,1.08.29,2,1.42a1.5,1.5,0,0,1,.56,1.34c0,0.11,0,.12.08,0.13a5.25,5.25,0,0,1,.64.26,0.36,0.36,0,0,1,.21.32,1,1,0,0,0,0,.15,1.1,1.1,0,0,0,.14.5,9.2,9.2,0,0,0,.34,1.45,9.35,9.35,0,0,1,.22,2.38,11.39,11.39,0,0,0,.18,2.13h0a0.54,0.54,0,0,1,.13.31c0,0.14.05,0.31,0.09,0.47a0.62,0.62,0,0,0,.27.54,0.42,0.42,0,0,0,.18-0.07l0.15-.1,0.08,0.16c0.22,0.42.76,4.73,0.82,5.08v0.07l0,0.06a7.09,7.09,0,0,0-.27,1.59,1,1,0,0,0,.44.17h0.07l0,0.06a5,5,0,0,1,.58,1.59l0,0.06,0,0.07a0.74,0.74,0,0,0-.17.44,10.11,10.11,0,0,1,.16,1.45,11.5,11.5,0,0,1-.27,2.26l0,0ZM97,16.72a5.46,5.46,0,0,1,.1-0.95l0-.2,0.1,0,0.06-.14a1.21,1.21,0,0,1,.16-0.34V14.22a2.25,2.25,0,0,0,.05-0.5,3.53,3.53,0,0,0-.46-1.7s-0.66-.93-1.44-1.86S93.87,8.31,93.5,8.34H93.13v12.8l0.51,0a2.45,2.45,0,0,0,.48,0,3.25,3.25,0,0,0,1.63-.88A21.54,21.54,0,0,0,97,17,2.16,2.16,0,0,1,97,16.72Zm24.39,5.17a8.78,8.78,0,0,1-.17,2.15l0,0,0,0c-0.12,0-.33.79-0.59,1.12,0,0.1,0,.21,0,0.32,0,0.52.07,1.13,0.07,1.73a3.09,3.09,0,0,1-.28,1.45,4.52,4.52,0,0,1-1,1.49L119,32.36a7.55,7.55,0,0,0-.32,1.57c0,0.41.25,3.66,0.25,6.1a11.66,11.66,0,0,1-.17,2.49,5.56,5.56,0,0,0-.33,2.23c0,0.21,0,.43,0,0.65a6.59,6.59,0,0,1-.36,2.49l-0.45,2.44a4.84,4.84,0,0,1-.9,1.9,1.73,1.73,0,0,1-.46.71,1.06,1.06,0,0,0-.36.3c-0.19.5-1.08,0.64-2.1,1a17.71,17.71,0,0,0-2.92.93l-0.12,0c-0.46,0-1.05-.55-1.27-0.53h0a1.83,1.83,0,0,1-1.23.54,10,10,0,0,1-1.74.19,1,1,0,0,1-.45-0.06l-0.2-.11L106,55a5,5,0,0,0,1.39-3c0-.07,0-0.14,0-0.22a8.38,8.38,0,0,0-.51-2.37l-0.06-.15,0.15-.06c0.62-.22,1.93-0.84,1.83-1.07a0.38,0.38,0,0,0,0-.19h-0.06a0.33,0.33,0,0,1-.34-0.19l-0.5-1.25-0.88-2,0.8-7.93a13.63,13.63,0,0,1-1.95-4.51V30.77c0-.37-0.39-0.43-0.43-1,0,0-.1-1.56-0.1-2.75a6,6,0,0,1,.08-1.2,2.71,2.71,0,0,0-.33-0.26L105,25.47l0.18-3a2.54,2.54,0,0,1-.16-0.68,5.86,5.86,0,0,0-.15-0.79v0l-0.08-.05V12.07l0.08-.05a3.61,3.61,0,0,0,.36-0.29V8.32l0.08,0A3.6,3.6,0,0,0,105.67,8V5.55C105.23,5.13,102,2,101.81,1.84l-0.22-.27h2.5l0,0.08a2.85,2.85,0,0,0,.26.39h1.46l0,0.13c0,0.43,2.06.68,3,1.74h1.43l0,0.08a4.59,4.59,0,0,0,.48.62h1.42l0.05,0.08a3.12,3.12,0,0,0,.26.39h1.86l0,0.08a2.88,2.88,0,0,0,.26.39h2l0.05,0.08c0.64,1.06,1.91,1.74,2.17,2.24,1.47,3.09,1.17,3.36,1.68,3.68l0.07,0-0.12,4.47a3.47,3.47,0,0,1,.25.71,4.73,4.73,0,0,0,.25.74l0.05,0v0.08S121.38,20,121.38,21.89Zm-6.56,7.36a2.09,2.09,0,0,1,.85-1.86c0.08-.45.39-2.55,1-3.12V20a3,3,0,0,1-.61-1.45,13.79,13.79,0,0,0-.33-1.34c-0.5-.74-1.55-1-1.65-2.16-1-.11-1.17-1-1.58-0.92-0.82,0-1.25-.06-1.87-0.06l-0.67,0-0.17,1.62,0.12,0.56s0.18,4.71.18,6.48c0,0.15,0,.28,0,0.38h0c0,0.08.1,0.19,0.14,0.29l0.19,0.42v0.06a6.38,6.38,0,0,0,.78,2.66l0.09,0-0.06,20.69a8.51,8.51,0,0,0,2.07-4.8c0-.07,0-0.15,0-0.27,0.49-1.66,1-2.21,1.18-3.16a0.32,0.32,0,0,1,0,0c0-.52,0-8.5.3-9.55C114.82,29.39,114.82,29.32,114.82,29.25ZM41.26,47.13L41,47a1.62,1.62,0,0,0-.64-0.14H40l0,0H39.89a1.64,1.64,0,0,0-.66.22l-0.09,0-0.08-.06a4.87,4.87,0,0,0-1.7-.18A13.75,13.75,0,0,0,34,47.2,2.15,2.15,0,0,1,33,48h0a0.27,0.27,0,0,1-.18-0.08h0a3,3,0,0,1-.6-0.49l-0.15-.1,0.11-.14c1.25-1.56.55-1.09,2-2.05a30.72,30.72,0,0,0,.37-5.61V39.1l0.07,0c0.39-.3.37-0.3,0.38-0.4s0-.21,0-0.4a6.37,6.37,0,0,1-.43-1.41A3.21,3.21,0,0,1,35.11,35L35,16.51l0.06,0a3.33,3.33,0,0,1,.31-0.23l0.06,0a0.41,0.41,0,0,0,0-.05A0.62,0.62,0,0,0,35,15.91L35,15.86,34.42,6.44a1.09,1.09,0,0,0-.91-0.67,1.13,1.13,0,0,1-.92-0.61A0.86,0.86,0,0,1,31.87,5a1.92,1.92,0,0,0-.55-0.55l-0.14-.1,0.11-.14c0.16-.21.37-0.47,0.42-0.56l0.06-.12,0.13,0a29.63,29.63,0,0,0,4.33.21A21.43,21.43,0,0,0,40,3.55l0.13-.05,0.07,0.12a5.43,5.43,0,0,0,.53.68l0,0V5.24l-0.12,0c-1.06.28-2.2,1.26-2.18,2.06,0,0.64.08,0.6,0.13,0.64a0.68,0.68,0,0,1,.3.77,0.89,0.89,0,0,1-.39.77,0.45,0.45,0,0,0-.26.4c0,1.39.2,5.14,0.2,8.32a31.11,31.11,0,0,1-.18,3.91,1.17,1.17,0,0,1,.19.59,3.69,3.69,0,0,0,.14.68v0l0.07,0,0.24,1.37-0.09.06a2,2,0,0,0-.4.33,1.54,1.54,0,0,0-.32,1.06c0,0.41.08,0.8,0.08,1a3.75,3.75,0,0,0,0,.5A5.28,5.28,0,0,0,38.29,29c0.05,0.28,0,.86.06,1.17a0.16,0.16,0,0,0,0,.12l0.07,0v0.08a5.55,5.55,0,0,1,.06.84,7.79,7.79,0,0,1-.06,1v0.07l-0.06,0a2.26,2.26,0,0,0-.41.33,1,1,0,0,0-.37.77A18.19,18.19,0,0,1,38,35.89v0.17a8.24,8.24,0,0,0,.59,1.63h0l0.07,0.05L38.47,41l-0.07,0a1.39,1.39,0,0,0-.39.32,0.77,0.77,0,0,0-.18.51,5.16,5.16,0,0,0,.21,1c0.36,1.48.24,0.66,2.94,2.61l0.06,0ZM56.6,56.57H50.54l0-.09a4.07,4.07,0,0,0-.26-0.38H48.81l0-.08a0.59,0.59,0,0,0-.44-0.41l-0.26,0a1,1,0,0,1-.75-0.47H43.15a1.05,1.05,0,0,1-1-.62c-0.86-.07-6.27-0.08-9.12-0.08H31.16l-0.05-.08a2.64,2.64,0,0,0-1.26-.62H28.27C28,54,25.75,55.4,25.56,56l-0.05.13-0.13,0a18.6,18.6,0,0,0-2.56-.23,3,3,0,0,0-1.33.21l-0.15.09L21.26,56a1.09,1.09,0,0,0-.38-0.41l-0.15-.11,0.11-.14a1,1,0,0,0,.4-0.74V54.53l1.27-.68c0.5-.49.43-0.28,1.53-1.28v-2l0.07,0a0.6,0.6,0,0,0,.36-0.45,0.6,0.6,0,0,0-.36-0.45L24,49.57V46L24.12,46a3.44,3.44,0,0,0,.36-0.29V44.13l0.07,0c0.41-.3.37-0.27,0.37-0.35s0-.17,0-0.33a1.45,1.45,0,0,0-.8-1.16L24,42.2v-6l0.1,0a0.46,0.46,0,0,0,.34-0.33,11.55,11.55,0,0,1-.1-1.55,10.46,10.46,0,0,1,.11-1.6V32.65l0.06,0a3.62,3.62,0,0,0,.36-0.29v-4.7l0.07,0a1.65,1.65,0,0,0,.48-1s0,0,0-.07A1.44,1.44,0,0,0,25,25.62l-0.07,0V19a2.69,2.69,0,0,0-.36-0.29l-0.07,0V15.1l0.07,0a7.29,7.29,0,0,0,.8-0.76c0-.25.09-1.17,0.09-2a5.83,5.83,0,0,0-.08-1.12,3,3,0,0,0-.38-0.3l-0.15-.1L25,10.63a6.33,6.33,0,0,0,.72-2.07v0a7.1,7.1,0,0,0-.75-2.41,1,1,0,0,0-.86-0.25H23.89l0,0.07L23.7,5.84c-0.51-.38.17-0.64-2.18-2.35l-0.14-.11,0.11-.14a1,1,0,0,0,.4-0.75l0-.13h0.77l0.05,0.08a3,3,0,0,0,.26.38h3.48l0,0.08a1.35,1.35,0,0,0,1,.9c0.14,0,.27-0.07.46-0.07a0.42,0.42,0,0,1,.26.1,18.46,18.46,0,0,0,1.92,2.08l0.07,0v4.39l-0.07.05a0.56,0.56,0,0,0-.36.57v0h0a1.56,1.56,0,0,0,.8.88l0.07,0v2L30.59,14a2.79,2.79,0,0,0-.36.28v9.22a2.43,2.43,0,0,1,.85.82,10,10,0,0,1,.25,3c0,2.78-.23,6.49-0.23,6.49v0.08l-0.07,0a3,3,0,0,0-.36.29v3.13c0.13,0.11.24,0.21,0.36,0.29l0.06,0v0.07a6.51,6.51,0,0,1,0,.86c0,0.73,0,1.63,0,1.64v0.13L31,40.4c-0.53.08-.49,0.43-0.71,1.1a1,1,0,0,1,.41.82v0.14a0.84,0.84,0,0,1-.43.9v2l-0.07.05a3.19,3.19,0,0,0-.36.28v2.94l-0.07.05a0.84,0.84,0,0,0-.37.61,0.58,0.58,0,0,0,0,.14,1.35,1.35,0,0,1,.47,1.28c0.8,0,1.39.11,2.12,0.11a8.76,8.76,0,0,0,1.29-.1,3,3,0,0,1,1.25-1.06l0.2,0c0.74,0,2.07.67,3.53,0.67a3.86,3.86,0,0,0,2.11-.58A0.83,0.83,0,0,1,41,49.37a13.22,13.22,0,0,1,1.62-.18c1.33-.09,3.12-0.12,4.93-0.12,3.86,0,7.85.14,7.85,0.14h0.16v5.54h0l0.05,0.12,0.2,0.4a10.46,10.46,0,0,0,.59,1ZM123.25,4.42c0,0.54-.26,1.27-2.06,1.27s-2.08-.73-2.08-1.27V2.69c0-.53.28-1.27,2.08-1.27s2.06,0.74,2.06,1.27V4.42Zm-0.36-1.76c0-.41-0.28-0.9-1.7-0.9s-1.71.49-1.71,0.9V4.45c0,0.41.29,0.91,1.71,0.91s1.7-.49,1.7-0.9V2.66Zm-2.24,1.26V4.8a0.07,0.07,0,0,1-.07.09h-0.22a0.08,0.08,0,0,1-.08-0.09V2.39a0.07,0.07,0,0,1,.08-0.09h0.93c0.75,0,.93.36,0.93,0.69V3.23a0.64,0.64,0,0,1-.5.64l0.4,0.93a0.07,0.07,0,0,1-.08.09h-0.23a0.1,0.1,0,0,1-.09-0.09l-0.37-.88h-0.71Zm0-1.33v1h0.6a0.49,0.49,0,0,0,.6-0.42V3a0.49,0.49,0,0,0-.6-0.42h-0.6Z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 124 66" focusable="false" aria-hidden="true"
                                             style={{width:'124px',fill:'white'}}>
                                            <g>
                                                <polygon points="9.53 64.97 5.89 64.97 5.89 60.03 9.48 60.03 9.48 60.94 7.12 60.93 7.12 61.97 9.37 61.97 9.37 62.88 7.12 62.87 7.12 64.06 9.53 64.06 9.53 64.97"/>
                                                <polygon points="18.54 64.87 17.56 64.87 15 61.89 15 64.86 13.84 64.86 13.84 60.22 14.9 60.22 17.38 63.06 17.38 60.23 18.54 60.23 18.54 64.87"/>
                                                <polygon points="28.71 60.93 26.92 60.92 26.92 64.97 25.69 64.97 25.69 60.92 23.89 60.92 23.89 60.01 28.71 60.02 28.71 60.93"/>
                                                <polygon points="36.5 64.97 32.88 64.96 32.88 60.06 36.45 60.06 36.45 60.96 34.1 60.96 34.1 61.99 36.34 61.99 36.34 62.89 34.1 62.89 34.1 64.06 36.5 64.07 36.5 64.97"/>
                                                <path d="M44,60a1.46,1.46,0,0,1,1.59,1.4,1.25,1.25,0,0,1-.83,1.19c0.5,0.25.65,0.85,1.33,2.28H44.72c-0.52-1-.71-2-1.37-2H43v2H41.8V60H44Zm-1,2h0.64a0.57,0.57,0,0,0,.66-0.55,0.56,0.56,0,0,0-.69-0.55H43V62Z"/>
                                                <polygon points="54.71 60.96 52.92 60.96 52.92 64.99 51.68 64.99 51.68 60.95 49.88 60.95 49.88 60.05 54.71 60.06 54.71 60.96"/>
                                                <path d="M63.21,65H61.93L61.54,64H59.41L59,65H57.79l1.92-4.76h1.38Zm-2.79-3.63-0.7,1.85h1.47Z"/>
                                                <polygon points="68.73 64.9 67.82 64.9 67.82 60.01 68.73 60.01 68.73 64.9"/>
                                                <polygon points="78.63 65 77.62 65 74.96 61.91 74.96 64.99 73.76 64.99 73.76 60.18 74.86 60.18 77.43 63.13 77.43 60.19 78.63 60.19 78.63 65"/>
                                                <polygon points="87.89 60.04 88.97 60.04 88.97 65.02 87.73 65.01 87.73 61.91 86.39 63.46 86.2 63.46 84.86 61.9 84.86 65.01 83.62 65.01 83.62 60.03 84.7 60.03 86.29 61.88 87.89 60.04"/>
                                                <polygon points="98.07 64.93 94.58 64.92 94.58 60.19 98.02 60.19 98.02 61.06 95.76 61.06 95.76 62.05 97.92 62.05 97.92 62.92 95.76 62.92 95.76 64.05 98.07 64.06 98.07 64.93"/>
                                                <polygon points="107.63 65 106.61 65 103.9 61.86 103.9 64.99 102.68 64.99 102.68 60.1 103.8 60.1 106.41 63.1 106.41 60.11 107.63 60.11 107.63 65"/>
                                                <polygon points="116.66 60.93 114.88 60.93 114.88 64.94 113.65 64.94 113.65 60.93 111.88 60.93 111.88 60.03 116.66 60.03 116.66 60.93"/>
                                            </g>
                                        </svg>
                                    </Button>
                                    <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                                        <Button className={classes.bottomButtonFirst} disableRipple>
                                            工作机会
                                        </Button>
                                        <Button className={classes.bottomButton} disableRipple>
                                            关于
                                        </Button>
                                        <Button className={classes.bottomButton} disableRipple>
                                            支持
                                        </Button>
                                        <Button className={classes.bottomButton} disableRipple>
                                            媒体中心
                                        </Button>
                                        <Button className={classes.bottomButton} disableRipple style={{minWidth:'30px'}}>
                                            API
                                        </Button>
                                        <Button className={classes.bottomButton} disableRipple>
                                            安全中心
                                        </Button>
                                    </div>
                                    <div style={{textAlign:'center',fontSize:'13px',color:'rgba(255,255,255,.5)',marginTop:'10px'}}>
                                        ©2020暴雪娱乐有限公司版权所有。
                                    </div>
                                    <div style={{textAlign:'center',fontSize:'13px',color:'rgba(255,255,255,.5)'}}>
                                        在此提及的其他所有<span className={classes.bottomButtonFirst} style={{fontSize:'13px',cursor:'pointer'}}>商标</span>均是其各自所有人的财产。
                                    </div>
                                    <div style={{textAlign:'center',fontSize:'13px',color:'rgba(255,255,255,.5)'}}>
                                        由上海网之易网络科技发展有限公司运营。
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <Button className={classes.bottomButtonFirst} disableRipple style={{fontSize:'13px',minWidth:'30px'}}>
                                            隐私
                                        </Button>
                                        <Button className={classes.smallBottomButton} disableRipple style={{minWidth:'30px'}}>
                                            法律
                                        </Button>
                                        <Button className={classes.smallBottomButton} disableRipple style={{minWidth:'30px'}}>
                                            条款
                                        </Button>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                        <Button className={classes.bottomButtonFirst} disableRipple style={{fontSize:'12px',minWidth:'30px',color:'rgba(255,255,255,.5)'}}>
                                            沪网文〔2017〕9633-727号
                                        </Button>
                                        <Button className={classes.smallBottomButton} disableRipple style={{minWidth:'30px',fontSize:'12px',color:'rgba(255,255,255,.5)'}}>
                                            增值电信业务经营许可证编号：沪B2－20080012
                                        </Button>
                                        <Button className={classes.smallBottomButton} disableRipple style={{minWidth:'30px',fontSize:'12px',color:'rgba(255,255,255,.5)'}}>
                                            沪ICP备: 沪B2－20080012
                                        </Button>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <Button className={classes.bottomButtonFirst} disableRipple style={{fontSize:'12px',minWidth:'30px',color:'rgba(255,255,255,.5)'}}>
                                            互联网违法和不良信息举报电话：0571-28090163
                                        </Button>
                                        <Button className={classes.smallBottomButton} disableRipple style={{minWidth:'30px',fontSize:'12px',color:'rgba(255,255,255,.5)'}}>
                                            沪公网安备：31011502002167
                                        </Button>
                                        <Button className={classes.smallBottomButton} disableRipple style={{minWidth:'30px',fontSize:'12px',color:'rgba(255,255,255,.5)'}}>
                                            网上有害信息专区
                                        </Button>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <Button className={classes.bottomButtonFirst} disableRipple style={{fontSize:'12px',minWidth:'30px',fontWeight:'700'}}>
                                            适龄提示：适合13岁及以上使用 家长监护工程>
                                        </Button>
                                        <Button className={classes.smallBottomButton} disableRipple style={{minWidth:'30px',fontSize:'12px',fontWeight:'700'}}>
                                            上海市网络游戏行业自律公约
                                        </Button>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <Button className={classes.bottomButtonFirst} disableRipple style={{fontSize:'12px',minWidth:'30px',color:'rgba(255,255,255,.5)'}}>
                                            上海市张江高科技园区碧波路690号5号楼301-A
                                        </Button>
                                        <Button className={classes.smallBottomButton} disableRipple style={{minWidth:'30px',fontSize:'12px',color:'rgba(255,255,255,.5)'}}>
                                            客服电话：0571-28090163
                                        </Button>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center',marginTop:'6px'}}>
                                        <Button style={{padding:'0',minWidth:'36px'}} disableRipple>
                                            <img src={buttonIcon1} alt='buttonIcon1' style={{width:'26px'}}/>
                                        </Button>
                                        <Button style={{padding:'0',minWidth:'36px'}} disableRipple>
                                            <img src={buttonIcon2} alt='buttonIcon2' style={{width:'26px'}}/>
                                        </Button>
                                        <Button style={{padding:'0',minWidth:'36px'}} disableRipple>
                                            <img src={buttonIcon3} alt='buttonIcon3' style={{width:'26px'}}/>
                                        </Button>
                                        <Button style={{padding:'0',minWidth:'36px'}} disableRipple>
                                            <img src={buttonIcon4} alt='buttonIcon4' style={{width:'26px'}}/>
                                        </Button>
                                        <Button style={{padding:'0',minWidth:'36px'}} disableRipple>
                                            <img src={buttonIcon5} alt='buttonIcon5' style={{width:'26px'}}/>
                                        </Button>
                                    </div>
                                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.5)',marginTop:'10px'}}>
                                        健康游戏忠告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当
                                    </div>
                                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.5)',marginTop:'6px',marginBottom:'45px'}}>
                                        适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        scrolled:state.navigation.scrolled,
        secondaryDropdown:state.navigation.secondaryDropdown,
        clickAway:state.navigation.clickAway,
        gameHover:state.navigation.gameHover,
        searchDropdownState:state.navigation.searchDropdown,
        purchaseHover:state.navigation.purchaseHover,
        animationOpacity:state.navigation.animationOpacity
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        scrollUp:()=>{dispatch(action.scrollUp())},
        scrollDown:()=>{dispatch(action.scrollDown())},
        openSecondaryDropdown:()=>{dispatch(action.openSecondaryDropdown())},
        closeSecondaryDropdown:()=>{dispatch(action.closeSecondaryDropdown())},
        gameMouseOver:()=>{dispatch(action.gameMouseOver())},
        gameMouseLeave:()=>{dispatch(action.gameMouseLeave())},
        openSearchDropdown:()=>{dispatch(action.openSearchDropdown())},
        closeSearchDropdown:()=>{dispatch(action.closeSearchDropdown())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
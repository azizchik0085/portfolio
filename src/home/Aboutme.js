import React from "react";
import { Link } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import image from "../styl/azizbek.jpg"
import Reveal from "react-reveal/Reveal"


const  Aboutme = () =>{
    return(
        <div className="about-me">
            <>
                <div className="side2">
                <img width={400} height={400} style={{borderRadius: '50%'}} src={image}  alt="name"/>
                
                </div>
                <div className="side1">
                   <Reveal  effect="hometext" duration="1250">
                        <h1 className="title">Hi , I'm  Azizbek</h1>
                        <p className="discription">22 y.o Frontend Developer, 
                        from Uzbekistan Bukhara  region. Welcome to my personal website </p>
                   </Reveal>
                    <div className="buttons"> 
                        <Link className="linkBtn" to="/">About me</Link>
                        <a className="linkBtn" href="/portfolio">Portfolio</a>
                    </div>
                    <div className="socialNet">
                        <a  href="https://www.youtube.com/channel/UCVQhWPcdXmYRcSTzBs6iCFQ"  > 
                            <YouTubeIcon className="iconsvg" />
                        </a>
                        <a  href="https://t.me/bek_2466" >
                            <TelegramIcon className="iconsvg" />
                        </a>
                        <a  href="/" target="_blank">
                            <WhatsAppIcon className="iconsvg" />
                        </a>
                    </div>
                </div>
                
                
            </>

        </div>

    )
}
export default Aboutme;
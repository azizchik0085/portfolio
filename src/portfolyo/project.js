// import { borderColor, borderRadius } from "@mui/system";
import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import image from "./portfolioazizbek.jpg";
import image2 from "./zakazchik.jpg"

const Project =() =>{
    return(
        <>
            <div className="portfoliotitle">
                <img width={700} height={400} src={image} alt='name' />
                <div className="portfoliotitle2">
                    <h1>My Portfolio</h1>
                    <p>This is my portfolio, it was created on 12/20/2022.</p>
                    <div className="portfolioBtn">
                        <a className="linkBtn" href="/">Source <GitHubIcon /> </a>
                        <a className="linkBtn" href="/">Code < InsertLinkIcon /></a>
                    </div>
                </div>
            </div>
            <div className="zakazchik">
                <img width={700} height={300} src={image2} alt='name' />
                <div className="zakazchik2">
                    <h1>Zakazchik.uz</h1>
                    <p>Online internet magazin</p>
                    <div className="portfolioBtn">
                        <a className="linkBtn" href="/">Source <GitHubIcon /> </a>
                        <a className="linkBtn" href="/">Code < InsertLinkIcon /></a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Project;
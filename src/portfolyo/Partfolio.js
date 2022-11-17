import React from "react";
import NavSec from "../home/NavSec";
import Reveal from "react-reveal/Reveal";
import PageInfo from "./pageinfo";
import Project from "./project";


const Portfolio = () =>{
    return(
        <>
            <Reveal effct="animNav">
                <NavSec />
            </Reveal>
            <Reveal effct="animNav">
                <PageInfo />
            </Reveal>    
            <Reveal effct="portfolioAnim">
                <Project />
            </Reveal>
        </>
    )

}
export default Portfolio;


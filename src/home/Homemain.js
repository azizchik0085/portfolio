import React from "react";
import NavSec from "./NavSec";
import Aboutme from "./Aboutme";
import Reveal from "react-reveal/Reveal"

const HomeMain = () => {
    return(
        <>
            <Reveal effct="animNav">
                <NavSec />
            </Reveal>
            <Aboutme />

            
        </>
    )
}


export default HomeMain;
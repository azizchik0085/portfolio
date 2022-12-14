import NavSec from "../home/NavSec";
import Reveal from "react-reveal/Reveal";
import About from "./about";


const Aboutinfo = () =>{
    return(
        <>
            <Reveal effct="animNav">
                <NavSec />
            </Reveal>
            <Reveal effct="portfolioAnim">
                <About />
            </Reveal>
        </>
    )

}
export default Aboutinfo;
import NavSec from "../home/NavSec";
import Reveal from "react-reveal/Reveal";
// import About from "./about";
import ContactForm from "./contact";


const Aboutinfo = () =>{
    return(
        <>
            <Reveal effct="animNav">
                <NavSec />
            </Reveal>
            <Reveal effct="portfolioAnim">
                < ContactForm/>
            </Reveal>
        </>
    )

}
export default Aboutinfo;
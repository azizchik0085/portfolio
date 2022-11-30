import React,{ useState , useEffect} from "react";
import{
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap"
import{Link} from "react-router-dom";
 

const NavSec = () => { 

    const [isOpen, setIsOpen]=useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [scrolled, setScrolled]=useState(false);

    const handleScroll=()=> {
        const offet= window.scroll;

        if (offet >200){
            setScrolled(true); 
        }
        else{
            setScrolled(false)
        }

    }

    useEffect(() => {
        window.addEventListener("scroll",handleScroll)

    })

    let x =["navbar"]
    if(scrolled){
        x.push('fixed');
    }


    return(
            <>
            
                <Navbar  className={x.join(" ")} light expand="md">
                    <Link to="/" className="navbar-brand" ><b>Azizbek</b>Dev </Link>
                        <NavbarToggler onClick={toggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <a href="/home">Home</a>
                                </NavItem>
                                <NavItem>
                                    <a href="/portfolio">Portfolio</a>
                                </NavItem>
                                <NavItem>
                                    <a href="/about">Skills</a> 
                                </NavItem>
                                <NavItem>
                                    <a href="/contact">Contact</a>
                                </NavItem> 
                            </Nav>
                        </Collapse>
                </Navbar>
            </>
    )
}
export default NavSec;
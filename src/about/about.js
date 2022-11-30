import React from "react";
import Reveal from "react-reveal"


const About = () =>{
    return(
        <>
            <Reveal effect="hometext" duration="1250">
          
            <div className="container">
                <div className="containerdiv">
                    <h1 className="containerh1">html5</h1>
                    <h1 className="foiz">90%</h1> 
                </div> 
                <div className="progress2 progress-moved">
                    <div className="progress-bar2" >
                    </div>                       
                </div> 
            </div>
            <div className="container2">
                <div className="containerdiv2">
                    <h1 className="containerh12">css3</h1>
                    <h1 className="foiz2">87%</h1> 
                </div> 
                <div className="progress22 progress-moved2">
                    <div className="progress-bar22" >
                    </div>                       
                </div> 
            </div>
            <div className="container">
                <div className="containerdiv">
                    <h1 className="containerh1">java script</h1>
                    <h1 className="foiz">80%</h1> 
                </div> 
                <div className="progress2 progress-moved">
                    <div className="progress-bar2" >
                    </div>                       
                </div> 
            </div>
            <div className="container">
                <div className="containerdiv">
                    <h1 className="containerh1">React</h1>
                    <h1 className="foiz">80%</h1> 
                </div> 
                <div className="progress2 progress-moved">
                    <div className="progress-bar2" >
                    </div>                       
                </div> 
            </div>

      





                {/* <div className="titles" >
                    <h3 className="titleh3" >Azizbek Abdurahmonov</h3>
                    <p className="titlep">
                        <ul>
                            <li>👋 Hi, I’m @azizchik0085</li>    
                        </ul>    
                        <ul>
                            <li>👀I’m interested in Development web apps and mobile apps, Trading</li>    
                        </ul> 
                        <ul>
                            <li>🌱 I’m currently learning React, Javascript, Typescript, Python, Django.</li>    
                        </ul> 
                    </p> 
                </div> */}
            </Reveal>
        </>


    )

}

export default About;
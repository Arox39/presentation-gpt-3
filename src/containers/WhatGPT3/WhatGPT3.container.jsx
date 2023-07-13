import "./WhatGPT3.styles.css"

import blur4 from "../../assets/Ellipse 39.png"
import blur5 from "../../assets/Ellipse 40.png"

import Feature from "../../components/Feature/Feature.component.jsx"

let WhatGPT3 = () => {
    return (
        <div className="whatis-container">
            <div className="whatis">
                <h1 className="title">What is GPT-3</h1>
                <p className="description">
                    We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
                </p>
            </div> 
            <div className="possibilities">
                <div className="title-container">
                    <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
                    <p className="text">Explore The Library</p>
                </div>
                <div className="possibilities-container">
                    <Feature title="Chatbots" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
                    <Feature title="Knowledgebase" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/> 
                    <Feature title="Education" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "/> 
                </div>
            </div>


            <img src={blur4} className="blur04"/>
            <img src={blur5} className="blur05"/>
        </div>
    )
}


export default WhatGPT3
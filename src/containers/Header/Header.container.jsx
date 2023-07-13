import "./Header.styles.css"

import people from "../../assets/people.png"
import AI from "../../assets/ai.png"
import blur03 from "../../assets/blur-03.png"

const Header = () => {
    return (
        <div className="header" id="header">
            <div className="content">
                <h1 className="gradient-text"> Let&apos;s Build Something amazing with GPT-3 OpenAI </h1>   
                <p className="description">
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <form className="email">
                    <input className="field" type="email" name="email" placeholder="Your Email Address"/>
                    <button className="submit">Get Started</button>
                </form>
                <div className="people-container">
                    <img src={people} className="people-image" alt="6 bubble of with people inside"/>
                    <p className="people-description">1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>  

            <img src={AI} className="image"/>
            <img src={blur03} className="blur03"/>
        </div>
    )
}

export default Header
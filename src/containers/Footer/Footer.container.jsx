import "./Footer.styles.css"
import title from "../../assets/logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <h1 className="gradient-text">Do you want to step in to the future before others</h1>
            <button className="btn">Request Early Access</button>
                <ul className="big-list">
                    <li className="title-container">
                        <img src={title} alt="logo"/>
                        <p className="description">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>                
                    </li>
                    <li className="small-list-container">
                        <div className="title">Links</div>
                        <ul className="small-list">
                            <li className="small-list-element">Overons</li>
                            <li className="small-list-element">Social Media</li>
                            <li className="small-list-element">Counters</li>
                            <li className="small-list-element">Contact</li>
                        </ul>
                    </li>
                    <li className="small-list-container">
                        <div className="title">Company</div>
                        <ul className="small-list">
                            <li className="small-list-element">Terms & Conditions</li>
                            <li className="small-list-element">Privacy Policy</li>
                            <li className="small-list-element">Contact</li>
                        </ul>
                    </li>
                    <li className="small-list-container">
                        <div className="title">Get in touch</div>
                        <ul className="small-list">
                            <li className="small-list-element">Crechterwoord K12 182 DK Alknjkcb</li>
                            <li className="small-list-element">085-132567</li>
                            <li className="small-list-element">info@payme.net</li>
                        </ul>
                    </li>
                </ul>       
            <p className="copyright">© 2023 GPT-3. All rights reserved.</p>
        </footer>
    )
}

export default Footer;
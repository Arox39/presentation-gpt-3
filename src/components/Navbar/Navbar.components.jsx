import "./Navbar.styles.css"
import logo from "../../assets/logo.svg"  
import blur01 from "../../assets/blur-01.png"  


const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#" className="title">
                <img src={logo}/>
            </a>
            <ul className="sections">
                <li className="section">
                    <a href="#">Home</a>
                </li>
                <li className="section">
                    <a href="#">What is GPT?</a>
                </li>
                <li className="section">
                    <a href="#">Open AI</a>
                </li>
                <li className="section">
                    <a href="#">Case Studies</a>
                </li>
                <li className="section">
                    <a href="#">Library</a>
                </li>
            </ul>
            <div className="information">
                <a href="#" className="sign-in"> Sign in</a>
                <button className="sign-up">Sign up</button>
            </div>

            <img src={blur01} className="blur"/>
        </div>
    )
}


export default Navbar
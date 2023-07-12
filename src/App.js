import "./App.css";

import Navbar from "./components/Navbar/Navbar.components.jsx"
import Brand from "./components/Brand/Brand.components.jsx"
import Header from "./containers/Header/Header.container.jsx"
import Features from "./containers/Features/Features.container.jsx"


export const App = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Brand/>
            <Features/>
        </div>
    )
}

export default App

import "./App.css";

import Navbar from "./components/Navbar/Navbar.components.jsx"
import Brand from "./components/Brand/Brand.components.jsx"
import Header from "./containers/Header/Header.container.jsx"
import WhatGPT3 from "./containers/WhatGPT3/WhatGPT3.container.jsx"
import Features from "./containers/Features/Features.container.jsx"
import Possibility from "./containers/Possibility/Possibility.container.jsx"


export const App = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
        </div>
    )
}

export default App

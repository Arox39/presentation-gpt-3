import "./App.css";

import Navbar from "./components/Navbar/Navbar.components.jsx"
import Brand from "./components/Brand/Brand.components.jsx"
import Header from "./containers/Header/Header.container.jsx"
import WhatGPT3 from "./containers/WhatGPT3/WhatGPT3.container.jsx"


export const App = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Brand/>
            <WhatGPT3/>
        </div>
    )
}

export default App

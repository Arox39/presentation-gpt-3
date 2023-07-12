import "./Brand.styles.css"

import google from "../../assets/google.png"
import slack from "../../assets/slack.png"
import atlassian from "../../assets/atlassian.png"
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"

const Brand = () => {
    return (
        <div className="brand">
            <img src={google} alt="google logo"/>
            <img src={slack} alt="slack logo" />
            <img src={atlassian} alt="atlassian logo" />
            <img src={dropbox} alt=" dropbox logo" />
            <img src={shopify} alt="shopify logo" />
        </div>

    )
}

export default Brand
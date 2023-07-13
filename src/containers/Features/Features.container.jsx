import "./Features.styles.css"

import blur02 from "../../assets/blur-02.png"
import Feature from "../../components/Feature/Feature.component"


const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        content: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
      },
      {
        title: 'Become the tended active',
        content: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
      },
      {
        title: 'Message or am nothing',
        content: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
      },
      {
        title: 'Really boy law county',
        content: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
      },
]


const Features = () => {
    return ( 
        <section className="features" id="features">
            <div className="title-container">
                <h1 className="gradient-text">
                    The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </h1>  
                <p className="description">Request Early Access to Get Started</p>      
            </div>
            <div className="features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} content={item.content} key={index}/>
                ))}
            </div>
            <img src={blur02} className="blur02"/>
        </section>
    )
}

export default Features
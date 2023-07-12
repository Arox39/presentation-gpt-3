import "./Feature.styles.css"


let Feature = ({title, content}) => {
    return (
        <div className="feature">
            <h1 className="title">{title}</h1>
            <p className="content">{content}</p>
        </div> 
    )
}

export default Feature
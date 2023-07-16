import "./Article.component.css"

const Article = ({image, date, title}) => {
    return (
        <article className="article">
            <img src={image} alt="illustration of the blog"/>
            <p className="date">{date}</p>
            <h1 className="title">{title}</h1>
            <p className="more">Read Full Article</p>
        </article>
    )
}
export default Article
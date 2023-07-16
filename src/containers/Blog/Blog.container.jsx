import "./Blog.styles.css"

import { blog01, blog02, blog03, blog04, blog05 } from "./import.js"

import Article from "../../components/Article/Article.component.jsx"

const Blog = () => {
    return (
        <section id="blog" className="blog">
            <h1 className="gradient-text">
                <span>A lot is happening,</span>
                <span>We are blogging about it.</span>
            </h1>
            <div className="article-container">
                <div className="article-containerA">
                <Article image={blog01} date={"Sep 26, 2021"} title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}/>
                </div>
                <div className="article-containerB">
                    <Article className="one" image={blog02} date={"Sep 26, 2021"} title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}/>
                    <Article className="two" image={blog03} date={"Sep 26, 2021"} title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}/>
                    <Article className="three" image={blog04} date={"Sep 26, 2021"} title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}/>
                    <Article image={blog05} date={"Sep 26, 2021"} title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}/>
                </div>
            </div>
            </section>
            )
        }
        
export default Blog
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Img from "gatsby-image"
import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
    query MyQuery {
      allContentfulBlogPost1 {
        edges {
          node {
            title
            publishDate(formatString: "DD MMMM YYYY")
            body {
              raw
            }
          }
        }
      }
    }
    
    `
  )
  return (
    <Layout>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost1.edges.map(edge => {
          return (
            <li className="post" >
              {/* <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2> */}
              <div className="meta">
                <span>Posted on {edge.node.title}</span>
                <span>Posted on {edge.node.body.raw}</span>
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              {/* {edge.node.featuredImage && (
                <Img
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )} */}
              {/* <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div> */}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog
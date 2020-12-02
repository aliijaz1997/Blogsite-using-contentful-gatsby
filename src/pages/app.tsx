import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import BlogPost from "../templates/blog-post"
// import Profile from "../components/profile"
import Login from "../components/login"
import { useStaticQuery, graphql } from "gatsby"
const App = () => {
 
  const data = useStaticQuery(
    graphql`
    query MyQuery1 {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            authorsName
            shortDescription1
            profilePic {
              fluid {
                src
              }
            }
            publishedDateAndTime
          }
        }
      }
    }
    
    
    
    `
  )
 
 return (
 <Layout>
   {/* {data.allContentfulBlogPost.edges.map((edge: any, key: string) => { */}
    <Router>
      <PrivateRoute path={`/app/profile/`} component={BlogPost} />
      <Login path="/app/login" />
    </Router>
{/* })} */}
  </Layout>
 )
}

export default App
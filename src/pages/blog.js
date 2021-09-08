import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'

const BlogPage = () => {

 const data = useStaticQuery(graphql`
 query {
  allContentfulBlogPosts ( sort: {fields: publishedDate, order:DESC } ) {
   
    edges {
      node {
        title
        slug
        publishedDate(formatString: "MMMM Do, YYYY")
      }
    }
  }

 }
 `)

  return (
    <Layout pageTitle="Blog Posts">
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPosts.edges.map((edges) => {
          return(
         <li className={blogStyles.post}>

              <Link to={`/blog/${edges.node.slug}`}>
                <h2>{edges.node.title}</h2>
              </Link>

            <p>Posted: {edges.node.publishedDate}</p>
         </li>
          )
       }) }
       </ol>
    </Layout>
  )
}


export default BlogPage
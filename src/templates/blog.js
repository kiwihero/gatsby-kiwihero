import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout';
import Head from "../components/head"

export const query = graphql`
  query($slug: String) {
      contentfulBlogPosts(slug: {eq: $slug}) {
        id
        title
        slug
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
          raw
          references {
            contentful_id
            title
            file {
              url
            }
          }
        }
      }
    }
  `

  const Blog = (props) => {

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
          const imageID = node.data.target.sys.id;
          const {
            file: { url },
            title,
          } = props.data.contentfulBlogPosts.body.references.find(({ contentful_id: id }) => {
            return id === imageID;
          });
  
          return <img src={url} alt={title}  />;
        },
      },
    }
  
    
	console.log( JSON.parse(props.data.contentfulBlogPosts.body.raw ));

	return (
    <Layout>
       <Head title={props.data.contentfulBlogPosts.title} />
      <h1>{props.data.contentfulBlogPosts.title}</h1>
      <p>{props.data.contentfulBlogPosts.publishedDate}</p>


      <section className="blogpost">
        {documentToReactComponents(
          JSON.parse(props.data.contentfulBlogPosts.body.raw),
          options
         
        )}
      </section>
    </Layout>
  )
        }

export default Blog
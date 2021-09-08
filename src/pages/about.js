import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return(
    <div>
        <Layout>
          <Head title = "About" />
          <h1>
            About Me
          </h1>

          <p>
             The story of how I became a developer is an interesting one. 
             My first experience in coding was at a summer camp when I was young.
             I learned how to design websites and that was my introduction to web development.
             When I got to college, my original major was music. I switched 
             to computer science in my freshman year. I was a violist and made 
             the switch to become a developer. It was difficult at first, but I found my
             passion by building new things.
            </p>
      <p>
                My expertise is in web and mobile development.
                I use various tools and frameworks to create web applications.
                I'm looking for new challenges where I can show my collaboration
                skills and gain experience.
            </p>

            <p>
                My hobbies includes writing and composing music, playing video games, and crafting. 
                I like to write and have a blog on DEV on articles about personal experiences
                 and current ideas as a developer.
            </p>

      <p> Want to get in touch? <Link to="/contact">Contact me.</Link></p>
      </Layout>
    </div>
  )

}

export default AboutPage

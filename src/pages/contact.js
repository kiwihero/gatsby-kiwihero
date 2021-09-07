import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faDev, faGithub, faGithubSquare, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/layout"
import  * as layoutStyles from '../components/layout.module.scss'
import Head from "../components/head"

const ContactPage = () => {
  return(
    <div>
        <Layout>
          <Head title = "Contact" />
          
    <p> Check me out or contact me on any of the platforms below</p>

    <a className={layoutStyles.icons} activeClassName={layoutStyles.activeIcon} href="https://twitter.com/ashmakesmagic">
      <FontAwesomeIcon icon={fab ,faTwitter} size="3x" title='twitter account for kiwihero'/>
      </a> 

    <a className={layoutStyles.icons} activeClassName={layoutStyles.activeIcon} href="https://www.linkedin.com/in/ashleyfreels/">
    <FontAwesomeIcon icon={fab ,faLinkedin} size="3x" title='linkedin profile for kiwihero'/>
      </a> 

      <a className={layoutStyles.icons} activeClassName={layoutStyles.activeIcon} href="https://dev.to/ashfreels">
    <FontAwesomeIcon icon={fab ,faDev} size="3x" title='DEV blog for kiwihero'/>
      </a> 

      <a className={layoutStyles.icons} activeClassName={layoutStyles.activeIcon} href="https://github.com/kiwihero">
    <FontAwesomeIcon icon={fab ,faGithubSquare} size="3x" title='github account for kiwihero'/>
      </a> 
    
    </Layout>
    </div>
  )

}

export default ContactPage
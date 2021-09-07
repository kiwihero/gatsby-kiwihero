import React from "react"
import Layout from "../components/layout"
import  * as layoutStyles from '../components/layout.module.scss'
import Head from "../components/head"



const HomePage = () => {
  return(
 
    <Layout>
      <Head />

      <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Blue01&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Brown'
/>
      <h1  className={layoutStyles.heroText} > Hi! Welcome to my blog! </h1>

    </Layout>
  )

}

export default HomePage
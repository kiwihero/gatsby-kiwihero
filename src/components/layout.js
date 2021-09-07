import * as React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import  * as layoutStyles from './layout.module.scss'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layoutStyles.container}>
      <main className={layoutStyles.content}>
      <Header />
      <title>{pageTitle}</title>
      
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Seo from "../components/Seo"
import "../css/main.css"
const IndexPage = () => {
  return (
    <main>
       <Layout>
         <Seo title="Portfolio"/>
         <Hero />
         <About/>
         <Projects/>

       </Layout>
  )
    </main>
  )
}

export default IndexPage

import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"

import "../css/main.css"
const IndexPage = () => {
  return (
    <main>
       <Layout>
         <Hero />
         <About/>
         <Projects/>

       </Layout>
  )
    </main>
  )
}

export default IndexPage

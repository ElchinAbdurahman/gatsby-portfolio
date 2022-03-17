import React from "react"
import Layout from "../components/Layout"
// import { graphql } from "gatsby"
import Projects from "../components/Projects"
// import SEO from "../components/SEO"

function projects() {
  return (
    <div>
        <Layout>
      {/* <SEO title="Projects" /> */}
      <section className="projects-page">
        <Projects  title="all projects" />
      </section>
    </Layout>
    </div>
  )
}

export default projects



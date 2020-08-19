import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Container from "../components/container"
import Nav from "../components/nav"
import Projects from "../components/projects"

export default ({ data }) => {

  return (
    <Container>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>

      <section className="hero is-large page-title">
        <div className="hero-head">
          <Nav />
        </div>
        <div className="hero-body">
          <div id="introduction-highlight">
            <div className="container">
              <div className="columns">
                <div
                  id="introduction"
                  className="column content is-9-tablet is-7-desktop is-6-widescreen is-offset-1"
                >
                  <h1 className="title is-1 is-spaced">
                    Hey, my name is Damon.
                  </h1>
                  <p>
                    A digital designer with a heart that embraces all things
                    creative, artistic and innovative, I have 3+ years
                    experience in industry, both agency-side, client-side and
                    freelance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects />
   
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

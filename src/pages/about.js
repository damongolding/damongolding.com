import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Container from "../components/container"
import Nav from "../components/nav"

export default ({ data }) => (
  <Container>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>

    <section className="hero page-title">
      <div className="hero-head">
        <Nav />
      </div>
      <div className="hero-body">
        <div id="introduction-highlight">
          <div className="container">
            <div className="columns">
              <div
                id="introduction"
                className="column content is-9-tablet is-9-desktop is-6-widescreen is-offset-1"
              >
                <h1 className="title is-1 is-spaced">About me</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column content is-9-tablet is-9-desktop is-6-widescreen is-offset-1">
            <p>
              Maecenas faucibus mollis interdum. Vestibulum id ligula porta
              felis euismod{" "}
              <a href="http://google.com" data-pjax-state="">
                semper
              </a>
              . Nulla vitae elit libero, a pharetra augue. Integer posuere erat
              a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus
              mollis interdum. Maecenas sed diam eget risus varius blandit sit
              amet non magna. Nulla vitae elit libero, a pharetra augue.
            </p>

            <p>
              Maecenas faucibus mollis interdum. Vestibulum id ligula porta
              felis euismod semper. Nulla vitae elit libero, a pharetra augue.
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Maecenas faucibus mollis interdum. Maecenas sed diam eget
              risus varius blandit sit amet non magna. Nulla vitae elit libero,
              a pharetra augue.
            </p>

            <p>
              Maecenas faucibus mollis interdum. Vestibulum id ligula porta
              felis euismod semper. Nulla vitae elit libero, a pharetra augue.
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Maecenas faucibus mollis interdum. Maecenas sed diam eget
              risus varius blandit sit amet non magna. Nulla vitae elit libero,
              a pharetra augue.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column has-divider is-offset-1"></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div id="skills" className="column is-6 content is-offset-1">
            <h3 className="title is-2">Skills.</h3>

            <div className="skill">
              <p className="title is-4">Web and user interface design.</p>
              <p className="subtitle is-6 is-spaced">Figma, Sketch, Photoshop.</p>
            </div>

            <div className="skill">
              <p className="title is-4">Interaction design.</p>
              <p className="subtitle is-6 is-spaced">Figma, Adobe XD.</p>
            </div>
            <div className="skill">
              <p className="title is-4">Motion graphics.</p>
              <p className="subtitle is-6 is-spaced">After effects.</p>
            </div>
            <div className="skill">
              <p className="title is-4">Video editing.</p>
              <p className="subtitle is-6 is-spaced">Premier Pro, After effects.</p>
            </div>
          </div>

          <div id="values" className="column is-5 content">
            <h3 className="title is-2">Values.</h3>

            <div className="value">
              <p className="title is-4">The web is for EVERYONE.</p>
              <p className="subtitle is-6 is-spaced">
                Accessibility should be considered from the beginning of the
                design process.
              </p>
            </div>

            <div className="value">
              <p className="title is-4">Always learning.</p>
              <p className="subtitle is-6 is-spaced">
                The web is constantly changing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

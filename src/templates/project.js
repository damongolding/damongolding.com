import React from "react"

import Container from "../components/container"
import Nav from "../components/nav"

export default (data) => {

  const { title, liveLink, html } = data.pageContext

  return (
    <Container props={data}>
      
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
                  <h1 className="title is-1 is-spaced">
                    {title}
                  </h1>
                  <div className="is-subtitle">
                    <a href={liveLink}>
                      {liveLink}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column content is-9-tablet is-9-desktop is-6-widescreen is-offset-1" dangerouslySetInnerHTML={{ __html: html }}>
            
          </div>
        </div>
      </div>
    </section>
    </Container>
  )
}

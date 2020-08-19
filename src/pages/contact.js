import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Container from "../components/container"
import Nav from "../components/nav"

export default ({ data }) => {


	const [values, setValues] = useState({name: '', email: "", message:"", sending: false});

	const handleInputChange = e => {
		const {name, value} = e.target
		setValues({...values, [name]: value})
	}

	const handleSubmit = e => {
		e.preventDefault();

		setValues({sending:true});

		console.log(values);
	}

  return (
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
                  className="column content is-9-tablet is-7-desktop is-6-widescreen is-offset-1"
                >
                  <h1 className="title is-1 is-spaced">Contact me.</h1>
                  <p>
                    Say hi{" "}
                    <span role="img" aria-label="wave emoji">
                      👋
                    </span>
                    !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column content is-9-tablet is-7-desktop is-6-widescreen is-offset-1">
              <form name="contact" action="POST" data-netlify="true" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label is-medium" htmlFor="name">
                    Name
                  </label>
                  <div className="control">
                    <input
                      name="name"
                      className="input is-medium"
                      type="text"
											placeholder="Your name"
											value={values.name}
											onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label is-medium" htmlFor="email">
                    Email
                  </label>
                  <div className="control">
                    <input
                      name="email"
                      className="input is-medium"
                      type="email"
											placeholder="you@email.com"
											value={values.email}
											onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label is-medium" htmlFor="message">
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      name="message"
                      className="textarea is-medium"
											placeholder="Hi Damon..."
											value={values.message}
											onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link is-medium is-rounded" disabled={values.sending}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export const query = graphql`
  query catImage {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import TransitionLink from "gatsby-plugin-transition-link"
import { animationIn, animationOut } from "./pageTransition"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 500, format: MARKDOWN)
            frontmatter {
              title
              path
            }
            id
            html
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges.map((edge, index) => {
    const excerpt = edge.node.excerpt
    const { title, path } = edge.node.frontmatter

    return (
      <div className={`columns ${index >= 1 ? "mt-6" : ""} `} key={edge.node.id}>
        <div className="column content is-9-tablet is-9-desktop is-6-widescreen is-offset-1">
          <h2>{title}</h2>
          <TransitionLink
            to={`project/${path}`}
            className="nolink"
            exit={{
              trigger: ({ node }) => animationOut(node),
              length: 0.5,
            }}
            entry={{
              delay: 0.5,
              trigger: ({ node }) => animationIn(node),
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          </TransitionLink>
          <br />
          <TransitionLink
            to={`project/${path}`}
            exit={{
              trigger: ({ node }) => animationOut(node),
              length: 0.5,
            }}
            entry={{
              delay: 0.5,
              trigger: ({ node }) => animationIn(node),
            }}
          >
            Read more
          </TransitionLink>
        </div>
      </div>
    )
  })

  return (
    <section className="section projects">
      <div className="container pb-6">{projects}</div>
    </section>
  )
}

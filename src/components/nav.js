import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import { animationIn, animationOut } from "./pageTransition"

const Nav = () => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="container">
      <div className="columns">
        <div className="column is-offset-1">
      <nav className="navbar">

              <div className="navbar-menu is-active is-shadowless">
                <div className="navbar-start">
                  {data.site.siteMetadata.menuLinks.map((link) => (
                    <TransitionLink
                      key={link.name}
                      className="navbar-item"
                      activeClassName="is-active"
                      to={link.link}
                      exit={{
                        trigger: ({ node }) => animationOut(node),
                        length: 0.3,
                      }}
                      entry={{
                        delay: 0.3,
                        trigger: ({ node }) => animationIn(node),
                      }}
                    >
                      {link.name}
                    </TransitionLink>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )}
  />
)

export default Nav

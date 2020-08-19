//import graphql from "gatsby";

const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const result = await graphql(`
    {
      allMarkdownRemark {
				edges{
					node {
						frontmatter {
							title
							liveLink
							path
						}
						html
					}
				}
      }
    }
	`)
	
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
	}
	
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/project/${node.frontmatter.path}`,
      component: projectTemplate,
      context: {
				title: node.frontmatter.title,
				liveLink: node.frontmatter.liveLink,
				html: node.html
			} // additional data can be passed via context
    })
  })
}

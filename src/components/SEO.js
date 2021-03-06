import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = props => (
  <StaticQuery
    query={graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            siteUrl
            keywords
          }
        }
      }
    `}
    render={data => {
      const SEO = data.site.siteMetadata
      return (
        <Helmet title={SEO.title + props.title}>
          <meta name="description" content={SEO.description} />
          <meta name="keywords" content={SEO.keywords.join(",")} />
        </Helmet>
      )
    }}
  />
)

export default SEO

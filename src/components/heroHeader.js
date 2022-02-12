import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
       <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
       <Link to ="https://www.ubereats.com/store/shangrila-bistro/9qOxJCKIRFGR-o53jEbXLA?diningMode=DELIVERY" className="button -primary">Uber Eats Delivery &rarr;</Link>
      </div>
    )}
  />
)

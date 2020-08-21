import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery } from "gatsby";

export default ({ props, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        pathPrefix
        siteMetadata {
          title
          keywords
          description
        }
      }
    }
  `);

  const { location } = props;

  // hash: ""
  // host: "localhost:8000"
  // hostname: "localhost"
  // href: "http://localhost:8000/"
  // key: "1597929239869"
  // origin: "http://localhost:8000"
  // pathname: "/"
  // port: "8000"
  // protocol: "http:"
  // search: ""

  const schema = {
    "@type" : "Person",
    "name" : "Damon Golding",
    "disambiguatingDescription":`${data.site.siteMetadata.description}`,
    "url": `${location.href}`,
    "image": ``,
    "jobTitle": "Digital Designer",
    "email": "damon@damongolding.com",
    "telephone": ""
  };

  return (
    <div id="content">
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <title>{data.site.siteMetadata.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`/android-chrome-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={`/android-chrome-512x512.png`}
        />
        <link rel="manifest" href={`/site.webmanifest.json`} />
        <link rel="canonical" href={location.href} />
        <meta name="msapplication-TileColor" content="#254473" />
        <meta name="msapplication-TileImage" content={`/ms-icon-144x144.png`} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />

        {/* <!-- @Schema https://schema.org/ --> */}
        <script type="application/ld+json">
          { JSON.stringify(schema) }
        </script>
      </Helmet>

      {children}
 
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-11 content has-text-left has-text-white is-offset-1">
              <p>This is a footer!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

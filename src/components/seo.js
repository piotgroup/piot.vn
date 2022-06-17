/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ lang, seo = {} }) {
  const { strapiGlobal } = useStaticQuery(
    graphql`
      query {
        strapiGlobal {
          siteName
          favicon {
            localFile {
              url
            }
          }
          defaultSeo {
            metaTitle
            metaDescription
            shareImage {
              localFile {
                url
              }
            }
          }
        }
      }
    `
  );

  const { siteName, defaultSeo, favicon } = strapiGlobal;

  const fullSeo = { ...defaultSeo, ...seo };

  fullSeo.metaTitle = `${fullSeo.metaTitle} | ${siteName}`;

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      );
    }
    if (fullSeo.shareImage) {
      const imageUrl = fullSeo.shareImage.localFile.url;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      );
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      });
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" });

    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={fullSeo.metaTitle}
      link={[
        {
          rel: "icon",
          href: favicon.localFile.url,
        },
      ]}
      meta={metaTags}
    />
  );
}

SEO.defaultProps = {
  lang: `vi`,
  defaultSeo: {},
};

export default SEO;

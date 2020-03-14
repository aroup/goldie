import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.nodes;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ excerpt, frontmatter, fields }) => {
        const title = frontmatter.title;
        return (
          <article key={fields.slug}>
            <header>
              <h3
                style={{
                  fontFamily: `cascadia_coderegular, Montserrat, sans-serif`,
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    fontFamily: `cascadia_coderegular, Montserrat, sans-serif`
                  }}
                  to={fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small
                style={{
                  fontFamily: `cascadia_coderegular, Montserrat, sans-serif`
                }}
              >
                {frontmatter.date}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: frontmatter.description || excerpt
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`;

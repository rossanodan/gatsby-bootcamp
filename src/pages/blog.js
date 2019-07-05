import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        } 
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(
          edge => (
            <li key={edge.node.id}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
            </li>
          )
        )}
      </ol>
    </Layout>
  )
}

export default BlogPage;
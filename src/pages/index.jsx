import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList, TagsBlock } from 'components';
import { Layout } from 'layouts';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const tags = [
    "Introducción al Aprendizaje Automático",
    "Tratamiento previo de los datos y fundamentos de los algoritmos de ML",
    "Algoritmos lineales",
    "Algoritmos no lineales",
    "Aprendizaje no supervisado y métodos de clustering",
    "Ensambles",
    "Ajuste, evaluación y sintonia de modelos",
    "Caso de estudio",
  ];

  return (
    <Layout>
      <Helmet title={'Inteligencia Artificial Portafolio'} />
      <Header title="Juan Francisco Kurucz - Portafolio">Portafolio de inteligencia artificial
      <TagsBlock list={tags || []} fontSize={"12px"}>
        <Link key={"other"} to={`/tags`} style={{fontSize:"12px"}}>
          <span>Otras etiquetas</span>
        </Link>
      </TagsBlock>
      </Header>
      <PostWrapper>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { cover, path, title, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </PostWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

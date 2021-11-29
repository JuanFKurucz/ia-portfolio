import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, TagsBlock } from 'components';
import { Layout, Container } from 'layouts';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;
  return (
    <Layout>
      <Helmet title={'Etiquetas'} />
      <Header title="Etiquetas">Etiquetas del portafolio</Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};
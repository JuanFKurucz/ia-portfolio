import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/logo.jpeg';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="JuanFKurucz Logo" style={{width:"100px","borderRadius":"50%"}} />
    </StyledLink>
    <Nav>
      <Link to="/">Inicio</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/tags">Etiquetas</Link>
      <Link to="https://github.com/JuanFKurucz/ia-portfolio" target="_blank">Github</Link>
    </Nav>
  </Headroom>
);

export default NavBar;

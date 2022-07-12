import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = () => (
  <nav>
    <StyLedNavLink to="/">Home</StyLedNavLink>
    <StyLedNavLink to="/authors">Authors</StyLedNavLink>
    <StyLedNavLink to="/books">Books</StyLedNavLink>
    <StyLedNavLink to="/table">Table</StyLedNavLink>
  </nav>
);

const StyLedNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    color: #2196f3;
  }
`;

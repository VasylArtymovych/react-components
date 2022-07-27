import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RoutPaths from '../../RoutPaths';

export const Navigation = () => (
  <nav>
    <StyLedNavLink to={RoutPaths.home}>Home</StyLedNavLink>
    <StyLedNavLink to={RoutPaths.authors}>Authors</StyLedNavLink>
    <StyLedNavLink to={RoutPaths.books}>Books</StyLedNavLink>
    <StyLedNavLink to={RoutPaths.table}>Table</StyLedNavLink>
    <StyLedNavLink to={RoutPaths.phoneBook}>PhoneBook</StyLedNavLink>
    <StyLedNavLink to={RoutPaths.registerForm}>RegisterForm</StyLedNavLink>
    <StyLedNavLink to={RoutPaths.todos}>Todos</StyLedNavLink>
    <StyLedNavLink to={RoutPaths.map}>AsyncTodos</StyLedNavLink>
    <StyLedNavLink to={RoutPaths.todosThunk}>TodosThunk</StyLedNavLink>
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

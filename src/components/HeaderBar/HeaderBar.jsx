import styled from 'styled-components';
import { Navigation } from '../Navigation/Navigation';

export default function HeaderBar() {
  return (
    <Header>
      <Navigation />
    </Header>
  );
}

const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

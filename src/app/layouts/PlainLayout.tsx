import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

function PlainLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default PlainLayout;



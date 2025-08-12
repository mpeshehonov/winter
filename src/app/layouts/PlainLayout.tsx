import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import BackgroundVideo from '../../widgets/BackgroundVideo';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

function PlainLayout() {
  return (
    <Wrapper>
      <BackgroundVideo />
      <Outlet />
    </Wrapper>
  );
}

export default PlainLayout;



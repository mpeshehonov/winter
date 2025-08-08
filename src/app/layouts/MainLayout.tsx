import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import CursorStar from '../../widgets/CursorStar';

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000; /* базовый тёмный фон */
  color: #fff;
`;

const Content = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function MainLayout() {

  return (
    <LayoutContainer>
      <CursorStar />
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </LayoutContainer>
  );
}

export default MainLayout;



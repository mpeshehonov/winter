import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import CursorStar from '../../widgets/CursorStar';

const LayoutContainer = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
  color: #fff;
`;

const Content = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

type LayoutVariant = 'default' | 'inverted';
type MainLayoutProps = { variant?: LayoutVariant, backgroundColor?: string };

function MainLayout({ variant = 'default', backgroundColor }: MainLayoutProps) {

  return (
    <LayoutContainer backgroundColor={backgroundColor}>
      <CursorStar />
      <Header variant={variant === 'inverted' ? 'inverted' : 'default'} />
      <Content>
        <Outlet />
      </Content>
      <Footer variant={variant === 'inverted' ? 'inverted' : 'default'} />
    </LayoutContainer>
  );
}

export default MainLayout;



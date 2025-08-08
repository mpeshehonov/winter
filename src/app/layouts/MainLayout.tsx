import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import ContactModal from '../../widgets/ContactModal';
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
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <LayoutContainer>
      <CursorStar />
      <Header onContactClick={() => setIsContactOpen(true)} />
      <Content>
        <Outlet />
      </Content>
      <Footer />
      {/* Модалка временно оставлена для переиспользования в будущем; можно удалить, когда решим точно */}
      <ContactModal isOpen={false} onClose={() => setIsContactOpen(false)} />
    </LayoutContainer>
  );
}

export default MainLayout;



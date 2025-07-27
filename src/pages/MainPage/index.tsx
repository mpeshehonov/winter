import { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import ContactModal from '../../widgets/ContactModal';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000; // Или background: linear-gradient(to bottom, #000, #333); для градиента по скрину
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Header onContactClick={() => setIsModalOpen(true)} />
      <MainContent>
        <div>
          <h1>КРУЖИМСЯ ЗИМА</h1>
          <p>Организуем современные события</p>
          {/* Добавь здесь больше контента по скрину */}
        </div>
      </MainContent>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
}

export default MainPage; 
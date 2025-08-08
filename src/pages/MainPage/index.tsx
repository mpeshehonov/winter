import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Card = styled.div`
  position: relative;
  width: min(100%, 820px);
  padding: 24px;
  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 48px;
  border-radius: 0; /* острые углы */
  overflow: hidden; /* блюр не выходит за пределы, углы остаются острыми */
  isolation: isolate; /* корректный стековый контекст для подложки */
`;

const BlurUnderlay = styled.div`
  position: absolute;
  inset: 0;
  background: #ffffff; /* собственный белый слой */
  opacity: 0.9;
  filter: blur(20px); /* размываем белую подложку только внутри карточки */
  will-change: filter;
  transform: translateZ(0);
  pointer-events: none;
`;

const TopBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0,0,0,0.8);
  z-index: 1;
`;

const PhoneText = styled.div`
  color: rgba(0,0,0,0.7);
  font-size: 16px;
`;

const CenterStack = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  z-index: 1;
  text-transform: uppercase;
  color: rgba(0,0,0,0.85);
`;

const CenterLine = styled.div`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: center;
`;

const BottomBar = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: end;
  color: rgba(0,0,0,0.7);
  z-index: 1;
`;

const BottomLeft = styled.div`
  justify-self: start;
`;
const BottomCenter = styled.div`
  justify-self: center;
`;
const BottomRight = styled.div`
  justify-self: end;
`;

function MainPage() {
  const [now, setNow] = useState('');
  useEffect(() => {
    const update = () => setNow(new Date().toLocaleTimeString('ru-RU'));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <MainContent>
      <Card>
        <BlurUnderlay />
        <TopBar>
          <span style={{ fontWeight: 700 }}>✱</span>
          <PhoneText>8 (953) 434-03-66</PhoneText>
        </TopBar>

        <CenterStack>
          <CenterLine>КРУЖИМСЯ. ЗИМА</CenterLine>
          <CenterLine>СТУДИЯ ОБЪЕДИНЕНИЯ</CenterLine>
          <CenterLine>2025</CenterLine>
        </CenterStack>

        <BottomBar>
          <BottomLeft>kry.zima.ru</BottomLeft>
          <BottomCenter>kry.zima@mail.ru</BottomCenter>
          <BottomRight>({now})</BottomRight>
        </BottomBar>
      </Card>
    </MainContent>
  );
}

export default MainPage; 
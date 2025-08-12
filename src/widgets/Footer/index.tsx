import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(0,0,0,0.55);
  color: #fff;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

function Footer() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('ru-RU'));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <FooterContainer>
      <span style={{ justifySelf: 'start' }}>Русский / En</span>
      <span style={{ justifySelf: 'center' }}>© 2025</span>
      <span style={{ opacity: 0.7, justifySelf: 'end' }}>({time})</span>
    </FooterContainer>
  );
}

export default Footer; 
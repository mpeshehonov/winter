import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

type FooterVariant = 'default' | 'inverted';
type FooterProps = { variant?: FooterVariant };

const FooterContainer = styled.footer<{ variant?: FooterVariant }>`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ variant }) => variant === 'inverted' ? 'transparent' : 'rgba(0,0,0,0.55)'};
  color: ${({ variant }) => variant === 'inverted' ? '#000' : '#fff'};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

function Footer({ variant = 'default' }: FooterProps) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('ru-RU'));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <FooterContainer variant={variant}>
      <span style={{ justifySelf: 'start' }}>Русский / En</span>
      <span style={{ justifySelf: 'center' }}>© 2025</span>
      <span style={{ opacity: 0.7, justifySelf: 'end' }}>({time})</span>
    </FooterContainer>
  );
}

export default Footer; 
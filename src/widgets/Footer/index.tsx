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

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 6px;
  }
`;

const Left = styled.span`
  justify-self: start;
`;

const Center = styled.span`
  justify-self: center;

  @media (max-width: 640px) {
    grid-column: 1 / 2;
    justify-self: start;
    opacity: 0.9;
  }
`;

const Right = styled.span`
  justify-self: end;
  opacity: 0.7;

  @media (max-width: 640px) {
    grid-column: 2 / 3;
    justify-self: end;
  }
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
      <Left>Русский / En</Left>
      <Center>© 2025</Center>
      <Right>({time})</Right>
    </FooterContainer>
  );
}

export default Footer; 
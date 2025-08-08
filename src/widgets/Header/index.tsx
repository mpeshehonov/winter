import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../shared/ui/Logo';

type Props = {
  onContactClick: () => void;
};

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #000;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 16px;
`;

const LeftNote = styled.div`
  justify-self: start;
  font-size: 14px;
  opacity: 0.85;
`;

const BrandLink = styled(Link)`
  justify-self: center;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  line-height: 1;

  /* Кликабельная зона */
  padding: 6px 8px;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;

  transition: color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
  @media (prefers-reduced-motion: reduce) { transition: none; }
  @media (hover: hover) and (pointer: fine) { &:hover { opacity: 0.9; } }
  &:active { opacity: 0.85; transform: translateY(0.5px); }
  &:focus-visible { outline: 2px solid rgba(255,255,255,0.95); outline-offset: 2px; }

  @media (pointer: coarse) { padding: 10px 12px; }
`;

const BrandText = styled.span`
  font-weight: 600;
  letter-spacing: 0.02em;
  opacity: 0.9;
`;

// убрали отдельный контейнер, вся кликабельная область — один BrandLink

const Nav = styled.nav`
  display: inline-flex;
  gap: 18px;
  justify-self: end;
`;

const NavItem = styled(NavLink)`
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  font-size: 14px;
  &.active { color: #fff; text-decoration: underline; }
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.85);
  font-size: 14px;
  cursor: pointer;
  padding: 0;
`;

function Header({ onContactClick }: Props) {

  return (
    <HeaderContainer>
      <LeftNote>Студия объединения</LeftNote>

      <BrandLink to="/" aria-label="На главную: КРУЖИМСЯ. ЗИМА">
        <Logo size={12} color="currentColor" />
        <BrandText>КРУЖИМСЯ. ЗИМА</BrandText>
      </BrandLink>

      <Nav>
        <NavButton onClick={onContactClick}>Связь</NavButton>
        <NavItem to="/info">Инфо</NavItem>
        <NavItem to="/projects">Проекты</NavItem>
        <NavItem to="/team">Команда</NavItem>
      </Nav>
    </HeaderContainer>
  );
}

export default Header; 
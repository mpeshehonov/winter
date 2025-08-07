import styled from '@emotion/styled';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
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

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
`;

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-self: center;
`;

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
  const location = useLocation();

  const title = useMemo(() => {
    if (location.pathname === '/') return 'Кружимся. Зима';
    if (location.pathname.startsWith('/info')) return 'Инфо';
    if (location.pathname.startsWith('/projects')) return 'Проекты';
    if (location.pathname.startsWith('/team')) return 'Команда';
    return 'Зима';
  }, [location.pathname]);

  return (
    <HeaderContainer>
      <LeftNote>Студия объединения</LeftNote>

      <Brand>
        <LogoLink to="/" aria-label="На главную">
          <Logo size={12} color="#fff" />
        </LogoLink>
        <span style={{ opacity: 0.75 }}>{title}</span>
      </Brand>

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
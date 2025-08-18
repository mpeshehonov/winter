import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../shared/ui/Logo';

type HeaderVariant = 'default' | 'inverted';
type HeaderProps = { variant?: HeaderVariant };

const HeaderContainer = styled.header<{ variant?: HeaderVariant }>`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ variant }) => variant === 'inverted' ? 'transparent' : 'rgba(0,0,0,0.55)'};
  color: ${({ variant }) => variant === 'inverted' ? '#000' : '#fff'};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 16px;
  position: relative;

  @media (max-width: 640px) {
    grid-template-columns: 1fr auto;
    row-gap: 8px;
  }
`;

const LeftNote = styled.div`
  justify-self: start;
  font-size: 14px;
  opacity: 0.85;

  @media (max-width: 640px) {
    grid-column: 2 / 3;
    grid-row: 2;
    justify-self: end;
    font-size: 12px;
    opacity: 0.9;
  }
`;

const BrandLink = styled(Link)`
  justify-self: center;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  line-height: 1;

  /* Кликабельная зона */
  padding: 6px 8px;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;

  transition: color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
  @media (prefers-reduced-motion: reduce) { transition: none; }
  @media (hover: hover) and (pointer: fine) { &:hover { opacity: 0.9; } }
  &:active { opacity: 0.85; transform: translateY(0.5px); }
  &:focus-visible { outline: 1px solid currentColor; outline-offset: 1px; }

  @media (pointer: coarse) { padding: 10px 12px; }
  @media (max-width: 640px) {
    grid-column: 2 / 3;
    grid-row: 1;
    justify-self: end;
  }
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

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)<{ variant?: HeaderVariant }>`
  color: ${({ variant }) => variant === 'inverted' ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.85)'};
  text-decoration: none;
  font-size: 14px;
  &.active { color: ${({ variant }) => variant === 'inverted' ? '#000' : '#fff'}; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 2px; }
  &:hover { color: inherit; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 1px; }
`;

const ToggleButton = styled.button<{ variant?: HeaderVariant }>`
  display: none;
  justify-self: end;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  font-size: 14px;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 640px) {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-color: ${({ variant }) => variant === 'inverted' ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.25)'};
    grid-column: 1 / 2;
    grid-row: 1;
    justify-self: start;
  }
`;

const MobileNav = styled.div<{ variant?: HeaderVariant }>`
  position: absolute;
  top: 100%;
  right: 8px;
  margin-top: 8px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({ variant }) => variant === 'inverted' ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.18)'};
  background: ${({ variant }) => variant === 'inverted' ? '#fff' : 'rgba(0,0,0,0.85)'};
  color: ${({ variant }) => variant === 'inverted' ? '#000' : '#fff'};
  display: none;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
  z-index: 20;

  @media (max-width: 640px) {
    display: flex;
    right: auto;
    left: 8px;
  }
`;

function Header({ variant = 'default' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer variant={variant}>
      <LeftNote>Студия объединения</LeftNote>

      <BrandLink to="/" aria-label="На главную: КРУЖИМСЯ. ЗИМА">
        <Logo size={12} color="currentColor" />
        <BrandText>КРУЖИМСЯ. ЗИМА</BrandText>
      </BrandLink>

      <Nav>
        <NavItem to="/contact" variant={variant}>Связь</NavItem>
        <NavItem to="/info" variant={variant}>Инфо</NavItem>
        <NavItem to="/projects" variant={variant}>Проекты</NavItem>
        <NavItem to="/team" variant={variant}>Команда</NavItem>
      </Nav>

      <ToggleButton
        variant={variant}
        aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? (
          <Logo size={12} color="currentColor" />
        ) : (
          <span aria-hidden>☰</span>
        )}
      </ToggleButton>

      {menuOpen && (
        <MobileNav id="mobile-nav" role="menu" variant={variant}>
          <NavItem to="/contact" variant={variant} onClick={() => setMenuOpen(false)}>Связь</NavItem>
          <NavItem to="/info" variant={variant} onClick={() => setMenuOpen(false)}>Инфо</NavItem>
          <NavItem to="/projects" variant={variant} onClick={() => setMenuOpen(false)}>Проекты</NavItem>
          <NavItem to="/team" variant={variant} onClick={() => setMenuOpen(false)}>Команда</NavItem>
        </MobileNav>
      )}
    </HeaderContainer>
  );
}

export default Header; 
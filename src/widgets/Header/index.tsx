import styled from '@emotion/styled';

type Props = {
  onContactClick: () => void;
};

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

function Header({ onContactClick }: Props) {
  return (
    <HeaderContainer>
      <div>*</div> {/* Логотип */}
      <nav>
        <button onClick={onContactClick}>Контакт</button>
        {/* Добавь другие ссылки: Сайт, Стул, Товары */}
      </nav>
    </HeaderContainer>
  );
}

export default Header; 
import styled from '@emotion/styled';

const Page = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  @media (max-width: 560px) {
    padding: 1.5rem 1rem 2rem;
  }
`;

const LeftTitle = styled.h1`
  margin: 0;
  font-size: 30px;
  line-height: 1.18;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: #000;
  @media (max-width: 700px) { font-size: 26px; }
  @media (max-width: 480px) { font-size: 22px; }
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 60vh;
  @media (max-width: 560px) { min-height: auto; }
`;

const SectionTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: #000;
  @media (max-width: 560px) { margin-bottom: 16px; }
`;

const RolesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
  font-size: 14px;
  text-transform: uppercase;
  color: #000;
  font-weight: 600;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const BottomNote = styled.p`
  margin: auto 0 0 0;
  max-width: 520px;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #000;
  font-weight: 600;
  @media (max-width: 560px) { margin-top: 8px; }
`;

function TeamPage() {
  return (
    <Page>
      <LeftTitle>
        Студия объединения —
        <br />
        это не агентство и не конвейер.
        <br />
        это живое сообщество
        <br />
        специалистов, которые устали
        <br />
        от формальностей и решили
        <br />
        делать по-настоящему
        <br />
        качественные проекты.
      </LeftTitle>

      <RightCol>
        <div>
          <SectionTitle>Команда. Направления</SectionTitle>
          <RolesList>
            <li>Дизайнеры</li>
            <li>Саунд-дизайнеры</li>
            <li>Фронтенд разработчики</li>
            <li>Бэкенд разработчики</li>
            <li>Продуктовики</li>
            <li>Художники</li>
            <li>Монтажёры</li>
            <li>Контентмейкеры</li>
            <li>Аналитики</li>
          </RolesList>
        </div>

        <BottomNote>
          Мы объединились потому, что верим: лучшие решения рождаются на стыке компетенций, без корпоративных барьеров, но с полной ответственностью за результат.
        </BottomNote>
      </RightCol>
    </Page>
  );
}

export default TeamPage;



import styled from '@emotion/styled';

const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
`;

function TeamPage() {
  return (
    <Wrapper>
      <h1>Команда</h1>
      <p>Состав, роли, контакты.</p>
    </Wrapper>
  );
}

export default TeamPage;



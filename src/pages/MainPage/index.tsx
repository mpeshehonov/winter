import styled from '@emotion/styled';

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function MainPage() {
  return (
    <MainContent>
      <div>
        <h1>КРУЖИМСЯ. ЗИМА</h1>
        <p>Организуем современные события</p>
      </div>
    </MainContent>
  );
}

export default MainPage; 
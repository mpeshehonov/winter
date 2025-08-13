import styled from '@emotion/styled';
import aboutImage from '../../shared/assets/about.png';

const Page = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Card = styled.div`
  height: 401px;
  width: 696px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${aboutImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Text = styled.p`
  width: 70%;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

function InfoPage() {
  return (
    <Page>
      <Card>
        <Text>
          Зима — не конец, а точка отсчета. Мы не боимся меняться, кружиться в потоке, чтобы в итоге создать нечто новое. Без лишнего шума, но с глубоким смыслом.
        </Text>
      </Card>
    </Page>
  );
}

export default InfoPage;



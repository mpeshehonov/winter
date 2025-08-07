import styled from '@emotion/styled';

const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
`;

const Paragraph = styled.p`
  margin: 0 0 0.75rem;
  color: rgba(255,255,255,0.9);
`;

function InfoPage() {
  return (
    <Wrapper>
      <Title>Инфо</Title>
      <Paragraph>
        Делаем digital‑продукты от идеи до реализации. Здесь может быть текст из макета: подход,
        методология, перечень направлений.
      </Paragraph>
    </Wrapper>
  );
}

export default InfoPage;



import styled from '@emotion/styled';
import chel from '../../shared/assets/chel.png';

const Page = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.article`
  position: relative;
  background: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) { border-radius: 6px; }
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const CaptionBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;
  padding: 10px 12px;
  font-size: 12px;
  color: #666;
  background: rgba(255,255,255,0.85);
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    row-gap: 6px;
    text-align: center;
  }
`;

const Title = styled.h1`
  margin: 0 0 16px 0;
  font-size: 28px;
  line-height: 1.1;
  color: #000;
  @media (max-width: 560px) { font-size: 22px; }
`;

function ProjectsPage() {
  return (
    <Page>
      <Title>Недавние проекты</Title>
      <Grid>
        {[0, 1, 2, 3].map((i) => (
          <Card key={i}>
            <Thumb src={chel} alt="Превью проекта" />
            <CaptionBar>
              <span>СИСТЕМА БЕЗОПАСНОСТИ ПРЕДПРИЯТИЯ</span>
              <span>NDA, ГОС.ЗАКАЗ</span>
              <span>2025</span>
            </CaptionBar>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}

export default ProjectsPage;



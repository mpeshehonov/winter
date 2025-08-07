import styled from '@emotion/styled';

const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
`;

function ProjectsPage() {
  return (
    <Wrapper>
      <h1>Проекты</h1>
      <p>Здесь будет список кейсов/работ.</p>
    </Wrapper>
  );
}

export default ProjectsPage;



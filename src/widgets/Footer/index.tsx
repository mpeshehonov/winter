import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Сделано в России • 2023-24-01</p>
      <p>Footer.design</p>
    </FooterContainer>
  );
}

export default Footer; 
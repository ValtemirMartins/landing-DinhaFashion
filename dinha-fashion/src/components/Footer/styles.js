import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 4rem 0 0 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

export const FooterSection = styled.div`
  margin-bottom: 2rem;
`;

export const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

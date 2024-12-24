import styled from 'styled-components';

export const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),
  url('https://cdn.awsli.com.br/600x1000/169/169170/produto/231622206/ouro-branco-com-croche-jegszq3wmh.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  text-align: center;
  color: white;
  padding: 0 2rem;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const HeroButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

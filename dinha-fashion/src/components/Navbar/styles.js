import styled from 'styled-components';

export const Nav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'scrolled',
})`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: ${props => props.scrolled ? 'white' : 'transparent'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
`;

export const NavMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem 0;
    display: ${props => props.isOpen ? 'block' : 'none'};
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
`;


export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

// React import removed as it's not used in this component
import { FooterContainer, FooterContent, FooterSection, FooterTitle, FooterLink, FooterBottom } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Dinha Fashion</FooterTitle>
          <p>Sua loja de moda favorita com as últimas tendências.</p>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Links Rápidos</FooterTitle>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#colecao">Coleção</FooterLink>
          <FooterLink href="#sobre">Sobre</FooterLink>
          <FooterLink href="#contato">Contato</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <p>Email: contato@dinhafashion.com</p>
          <p>Telefone: (11) 99999-9999</p>
          <p>Endereço: Rua da Moda, 123</p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>© 2024 Dinha Fashion. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

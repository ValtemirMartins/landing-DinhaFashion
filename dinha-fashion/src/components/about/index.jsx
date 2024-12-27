import 'react';
import { motion } from 'framer-motion';
import {
  AboutContainer,
  AboutContent,
  ImageSection,
  TextSection,
  Title,
  Description,
  HighlightBox,
  StatsContainer,
  StatItem
} from './styles';

const About = () => {
  return (
    <AboutContainer id="sobre">
      <AboutContent>
        <ImageSection
          as={motion.div}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 1.5,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true }}
        >
          <img src="https://www.deluxebiquinis.com.br/public-images/product/zoom-1105-F7223.jpg" alt="Nossa História" />
        </ImageSection>

        <TextSection
          as={motion.div}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 1.5,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true }}
        >
          <Title>Nossa História</Title>
          <Description>
            Desde 2015, a Dinha Fashion tem sido sinônimo de elegância e estilo na moda praia brasileira.
            Nascemos do sonho de criar peças que celebram a beleza natural de cada mulher.
          </Description>

          <HighlightBox>
            Nossa missão é fazer você se sentir confiante e deslumbrante em cada momento à beira-mar.
          </HighlightBox>

          <StatsContainer>
            <StatItem>
              <h3>8+</h3>
              <p>Anos de Experiência</p>
            </StatItem>
            <StatItem>
              <h3>5000+</h3>
              <p>Clientes Satisfeitas</p>
            </StatItem>
            <StatItem>
              <h3>300+</h3>
              <p>Modelos Exclusivos</p>
            </StatItem>
          </StatsContainer>
        </TextSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;

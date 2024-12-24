import 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HeroContainer, HeroContent, HeroTitle, HeroSubtitle, HeroButton } from './styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>Dinha Fashion Moda Praia</HeroTitle>
          <HeroSubtitle>Você pode fazer tudo, ACREDITE!</HeroSubtitle>
          <Link to="colecao" smooth={true} duration={500}>
            <HeroButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorar Coleção
            </HeroButton>
          </Link>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

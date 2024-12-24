import  { useState, useEffect } from 'react';
import { Nav, NavContainer, Logo, NavLinks, NavLink, MobileIcon, NavMenu } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo
          as={motion.div}
          whileHover={{ scale: 1.1 }}
        >
          Dinha Fashion
        </Logo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu isOpen={isOpen}>
          <NavLinks>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#colecao">Coleção</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#contato">Contato</NavLink>
          </NavLinks>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

import 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {
  ContactContainer,
  ContactContent,
  ContactInfo,
  ContactForm,
  Title,
  InfoItem,
  SocialLinks,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
} from './styles';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formspree.io/f/xjkvpgpg', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        e.target.reset();
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      alert(`Erro ao enviar mensagem. Tente novamente. ${error.message}`);
    }
  };

  return (
    <ContactContainer id="contato">
      <ContactContent>
        <ContactInfo
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Title>Entre em Contato</Title>
          <InfoItem>
            <FaMapMarkerAlt />
            <div>
              <h3>Localização</h3>
              <p>Rua Espirito Santo, N6 casa B </p>
              <p>Cabo Frio - RJ</p>
            </div>
          </InfoItem>

          <InfoItem>
            <FaWhatsapp />
            <div>
              <h3>WhatsApp</h3>
              <p>(22) 992058774</p>
            </div>
          </InfoItem>

          <InfoItem>
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>contato@dinhafashion.com</p>
            </div>
          </InfoItem>

          <SocialLinks>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5522992058774" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </SocialLinks>
        </ContactInfo>

        <ContactForm
          as={motion.form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Input type="text" name="name" placeholder="Nome" required />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" placeholder="Email" required />
          </FormGroup>
          <FormGroup>
            <Input type="tel" name="phone" placeholder="Telefone" />
          </FormGroup>
          <FormGroup>
            <TextArea name="message" placeholder="Mensagem" required rows="5" />
          </FormGroup>
          <SubmitButton
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
            type="submit"
          >
            Enviar Mensagem
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

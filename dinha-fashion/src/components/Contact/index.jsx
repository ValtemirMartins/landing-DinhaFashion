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
  ContactMap
} from './styles';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <ContactContainer id="contato">
      <ContactContent>
        <ContactInfo
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Title>Entre em Contato</Title>
          
          <InfoItem>
            <FaMapMarkerAlt />
            <div>
              <h3>Localização</h3>
              <p>Av. Beira Mar, 1000</p>
              <p>Rio de Janeiro - RJ</p>
            </div>
          </InfoItem>

          <InfoItem>
            <FaWhatsapp />
            <div>
              <h3>WhatsApp</h3>
              <p>(21) 99999-9999</p>
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
            <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </SocialLinks>
        </ContactInfo>

        <ContactForm
          as={motion.form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Input type="text" placeholder="Nome" required />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Email" required />
          </FormGroup>
          <FormGroup>
            <Input type="tel" placeholder="Telefone" />
          </FormGroup>
          <FormGroup>
            <TextArea placeholder="Mensagem" required rows="5" />
          </FormGroup>
          <SubmitButton
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Enviar Mensagem
          </SubmitButton>
        </ContactForm>
      </ContactContent>

      <ContactMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1185574749!2d-43.18!3d-22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjAiUyA0M8KwMTAnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1635789876543!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </ContactMap>
    </ContactContainer>
  );
};

export default Contact;

import 'react';
import { motion } from 'framer-motion';
import { 
  NewsletterContainer, 
  NewsletterContent, 
  Title, 
  Description, 
  Form, 
  Input, 
  Button 
} from './styles';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
  };

  return (
    <NewsletterContainer>
      <NewsletterContent data-aos="fade-up">
        <Title>Fique por dentro das novidades</Title>
        <Description>
          Cadastre-se para receber ofertas exclusivas e as últimas tendências da moda
        </Description>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            required 
          />
          <Button
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Cadastrar
          </Button>
        </Form>
      </NewsletterContent>
    </NewsletterContainer>
  );
};

export default Newsletter;

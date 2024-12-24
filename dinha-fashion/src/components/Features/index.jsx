import { FaShippingFast, FaLock, FaExchangeAlt, FaHeadset } from 'react-icons/fa'
import { Container, Grid, Feature, Icon, Title, Description } from './styles'

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast />,
      title: 'Entrega Rápida',
      description: 'Entrega em todo Brasil'
    },
    {
      icon: <FaLock />,
      title: 'Pagamento Seguro',
      description: 'Compra 100% segura'
    },
    {
      icon: <FaExchangeAlt />,
      title: 'Troca Fácil',
      description: 'Política de devolução simples'
    },
    {
      icon: <FaHeadset />,
      title: 'Suporte 24/7',
      description: 'Atendimento personalizado'
    }
  ]

  return (
    <Container>
      <Grid>
        {features.map((feature, index) => (
          <Feature key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <Icon>{feature.icon}</Icon>
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
          </Feature>
        ))}
      </Grid>
    </Container>
  )
}

export default Features

import { motion } from 'framer-motion'
import { Container, Grid, Card, Image, Title, Price, Button } from './styles'

const Collection = () => {
  const products = [
    {
      id: 1,
      name: 'Vestido Floral',
      price: 'R$ 199,90',
      image: 'https://jesily.com.br/cdn/shop/files/KitModaPraiaVerao-Biquini_Saida4_384x.webp?v=1697036266'
    },
    {
      id: 2,
      name: 'Conjunto Elegante',
      price: 'R$ 259,90',
      image: 'https://m.media-amazon.com/images/I/51mEqnCP0pL._AC_SY1000_.jpg'
    },
    {
      id: 3,
      name: 'Conjunto Elegante',
      price: 'R$ 259,90',
      image: 'https://cdn.shopify.com/s/files/1/0671/5041/4120/files/S714b484124364ae49736014d7f2b89bel_480x480.jpg?v=1696877103'
    },
    {
      id: 4,
      name: 'Conjunto Elegante',
      price: 'R$ 259,90',
      image: 'https://cdn.sistemawbuy.com.br/arquivos/44a1dfb848d25121298a2d4ddf18443a/produtos/65b8feab0c003/biquini_efeito_lipo-6-65b8feabc7458.jpg'
    },
    {
      id: 5,
      name: 'Vestido Floral',
      price: 'R$ 199,90',
      image: 'https://jesily.com.br/cdn/shop/files/KitModaPraiaVerao-Biquini_Saida4_384x.webp?v=1697036266'
    },
    {
      id: 6,
      name: 'Conjunto Elegante',
      price: 'R$ 259,90',
      image: 'https://m.media-amazon.com/images/I/51mEqnCP0pL._AC_SY1000_.jpg'
    },
    {
      id: 7,
      name: 'Conjunto Elegante',
      price: 'R$ 259,90',
      image: 'https://cdn.shopify.com/s/files/1/0671/5041/4120/files/S714b484124364ae49736014d7f2b89bel_480x480.jpg?v=1696877103'
    },
    {
      id: 8,
      name: 'Conjunto Elegante',
      price: 'R$ 259,90',
      image: 'https://cdn.sistemawbuy.com.br/arquivos/44a1dfb848d25121298a2d4ddf18443a/produtos/65b8feab0c003/biquini_efeito_lipo-6-65b8feabc7458.jpg'
    },
    
  ]

  return (
    <Container id="colecao">
      <h2 data-aos="fade-up">Nossa Coleção</h2>
      <Grid>
        {products.map((product) => (
          <Card
            key={product.id}
            as={motion.div}
            whileHover={{ y: -10 }}
            data-aos="fade-up"
          >
            <Image src={product.image} alt={product.name} />
            <Title>{product.name}</Title>
            <Price>{product.price}</Price>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comprar
            </Button>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

export default Collection

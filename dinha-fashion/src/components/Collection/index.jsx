import { motion } from 'framer-motion'
import { Container, Grid, Card, Image, Title, Price, Button } from './styles'

const Collection = () => {
  const products = [
    {
      id: 1,
      name: 'Vestido Floral',
      retailPrice: 'R$ 199,90',
      wholesalePrice: 'R$ 159,90',
      image: 'https://jesily.com.br/cdn/shop/files/KitModaPraiaVerao-Biquini_Saida4_384x.webp?v=1697036266'
    },
    {
      id: 2,
      name: 'Conjunto Elegante',
      retailPrice: 'R$ 259,90',
      wholesalePrice: 'R$ 209,90',
      image: 'https://m.media-amazon.com/images/I/51mEqnCP0pL._AC_SY1000_.jpg'
    },
    {
      name: 'Vestido Floral',
      retailPrice: 'R$ 199,90',
      wholesalePrice: 'R$ 159,90',
      image: 'https://cdn.shopify.com/s/files/1/0671/5041/4120/files/S714b484124364ae49736014d7f2b89bel_480x480.jpg?v=1696877103'
    },
    {
      id: 4,
      name: 'Conjunto Elegante',
      retailPrice: 'R$ 259,90',
      wholesalePrice: 'R$ 209,90',
      image: 'https://cdn.sistemawbuy.com.br/arquivos/44a1dfb848d25121298a2d4ddf18443a/produtos/65b8feab0c003/biquini_efeito_lipo-6-65b8feabc7458.jpg'
    },
    {
      id: 5,
      name: 'Vestido Floral',
      retailPrice: 'R$ 199,90',
      wholesalePrice: 'R$ 159,90',
      image: 'https://produtgy.com.br/cdn/shop/products/KitModaPraiaVerao2023-Biquini_Saida20_700x.jpg?v=1671373242'
    },
    {
      id: 6,
      name: 'Conjunto Elegante',
      retailPrice: 'R$ 259,90',
      wholesalePrice: 'R$ 209,90',
      image: 'https://78139.cdn.simplo7.net/static/78139/sku/biquinis-asa-delta-biquini-asa-delta-marinho-c-pink-p-1675294623994.jpg'
    },
    {
      id: 7,
      name: 'Conjunto Elegante',
      retailPrice: 'R$ 259,90',
      wholesalePrice: 'R$ 209,90',
      image: 'https://milaestilo.com/cdn/shop/files/S4e70c7aa96c84c83b3011035b59c7816U.webp?v=1697031122'
    },
    {
      id: 8,
      name: 'Conjunto Elegante',
      retailPrice: 'R$ 259,90',
      wholesalePrice: 'R$ 209,90',
      image: 'https://images-americanas.b2w.io/produtos/4019614491/imagens/biquini-fio-dental-com-tira-lateral-cortininha-com-bojo-moda-verao/4019624770_1_large.jpg'
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
            whileHover={{ y: -25}}
            data-aos="fade-up"
          >
            <Image src={product.image} alt={product.name} />
            <Title>{product.name}</Title>
            <Price>
              <div className="retail">
                <span>Varejo:</span>
                <span>{product.retailPrice}</span>
              </div>
              <div className="wholesale">
                <span>Atacado (min. 10 peças):</span>
                <span>{product.wholesalePrice}</span>
              </div>
            </Price>
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

import { motion } from 'framer-motion'
import { Container, Grid, Card, Image, Title, Price, Button } from './styles'
import asaDeltaOncinha from '/images/foto01.jpeg'
import calcaLacoCortininha from '/images/foto02.jpeg'
import calcaFioDuploCortininha from '/images/foto03.jpeg'
import calcaAsaDeltaCortininhaPreta from '/images/foto04.jpeg'

const Collection = () => {
  const products = [
    {
      id: 1,
      name: 'Conjunto Asa Delta e cortinha oncinha',
      image: asaDeltaOncinha
    },
    {
      id: 2,
      name: 'Conjunto Calça Laço Cortininha',
      image: calcaLacoCortininha
    },
    {
      id: 3,
      name: 'Conjunto Calça Fio Duplo Cortininha',
      image: calcaFioDuploCortininha
    },
    {
      id: 4,
      name: 'Conjunto Calça Asa Delta Cortininha Preta',
      image: calcaAsaDeltaCortininhaPreta
    },
    {
      id: 5,
      name: 'Vestido Floral',
      image: 'https://produtgy.com.br/cdn/shop/products/KitModaPraiaVerao2023-Biquini_Saida20_700x.jpg?v=1671373242'
    },
    {
      id: 6,
      name: 'Conjunto Elegante',
      image: 'https://78139.cdn.simplo7.net/static/78139/sku/biquinis-asa-delta-biquini-asa-delta-marinho-c-pink-p-1675294623994.jpg'
    },
    {
      id: 7,
      name: 'Conjunto Elegante',
      image: 'https://milaestilo.com/cdn/shop/files/S4e70c7aa96c84c83b3011035b59c7816U.webp?v=1697031122'
    },
    {
      id: 8,
      name: 'Conjunto Elegante',
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
              <div className="wholesale">
                <span>Venda Somente no Atacado</span>
               
              </div>
            </Price>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Orçamento
            </Button>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

export default Collection

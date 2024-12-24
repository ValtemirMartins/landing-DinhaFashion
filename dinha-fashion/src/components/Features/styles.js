import styled from 'styled-components'

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 5rem 2rem;
`

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

export const Feature = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`

export const Icon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`

export const Title = styled.h3`
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  color: #666;
`

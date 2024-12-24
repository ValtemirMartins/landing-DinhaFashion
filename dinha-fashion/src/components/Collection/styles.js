import styled from 'styled-components'

export const Container = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

export const Card = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

export const Title = styled.h3`
  padding: 1rem;
  font-size: 1.2rem;
`

export const Price = styled.p`
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 1.1rem;
`

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`

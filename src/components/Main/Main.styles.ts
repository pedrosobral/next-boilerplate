import styled from '@emotion/styled';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 4rem;
  background-color: #222222;
  color: white;
`;

export const Logo = styled.img`
  width: 15rem;
  margin-bottom: 3rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  max-lines: 2;
`

export const Description = styled.p`
  font-size: 2rem;
  margin-bottom: 5rem;
`

export const Illustration = styled.img`
  width: min(25rem, 100%);
`

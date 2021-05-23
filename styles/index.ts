import styled, {css} from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #030C25;
  padding-bottom: 10rem;
  *:not(:last-child) {
    margin-top: 2.5rem;
  }
`

export const Header = styled.h1<{h1?: boolean; h2?: boolean}>`
  margin-right: 1rem;
  margin-left: 1rem;
  font-family: Gilroy, sans-serif;
  ${props => props.h1 && css`
    color: white;
  font-size: 2.75rem;
  margin-bottom: 0;
  `}
  ${props => props.h2 && css`
  font-weight: normal;
  color: #C8C8C8;
  font-size: 1.4rem;
  `}
  @media (max-width: 580px) {
    ${props => props.h1 && css`
    font-size: 2.25rem;
    `}

    ${props => props.h2 && css`
    font-size: 1.2rem;
  `}
  }
`
export const Img = styled.img`
  margin-bottom: -1rem;
  @media (max-width: 580px) {
    width: 12rem;
  }
`

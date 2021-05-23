import styled, {css} from 'styled-components'

export const Container = styled.div`
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
  font
`




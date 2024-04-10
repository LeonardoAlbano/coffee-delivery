import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 10.0rem;
  height: 4.0rem;
  border-radius: .4rem;
  border: 0;
  margin: .8rem;

  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
`

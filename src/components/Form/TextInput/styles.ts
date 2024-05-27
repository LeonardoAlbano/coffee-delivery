import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.6rem;
  border: 1px solid ${(props) => props.theme['base-button']};

  background-color: ${(props) => props.theme['base-input']};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${(props) => props.theme['base-button']};
  }

  input {
    color: ${(props) => props.theme['base-button']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  span {
    color: ${(props) => props.theme['base-label']};
    padding-right: 12px;
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  font-weight: 400;
  color: red;
`

import styled from 'styled-components'

export const AuthBackground = styled.aside`
  align-items: center;
  background: opaque;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

export const AuthBox = styled.section`
  background: white;
  padding: 1rem 3rem;
  text-align: center;
  width: 35rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
`


export const AuthTitle = styled.h2`
  color: black;
  font-size: 2.1rem;
  padding: 0 0 1rem;
  text-align: center;
  margin-bottom: 2%;
  font-family: 'Pacifico', cursive;
`

export const AuthMessage = styled.p`
  color: red;
  opacity: ${props => (props.isInvalid ? 0 : 1)};
  margin-top: 0;
  font-weight: bold;
  padding: 0.7rem 0;
  font-family: 'Roboto', sans-serif;
`

export const SendMessage = styled.p`
  color: green;
  opacity: ${props => (props.isInvalid ? 0 : 1)};
  margin-top: 0;
  font-weight: bold;
  padding: 0.7rem 0;
  font-family: 'Roboto', sans-serif;
`

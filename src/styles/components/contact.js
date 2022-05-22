import styled from 'styled-components';

export const H2 = styled.h2`
  width: 95%;
  font-size: 2.4rem;
  margin: 20px auto;
`
export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  font-size: 2.0rem;
`
export const Input = styled.input`
  border-radius: 5px;
  height: 30px;
`
export const Textarea = styled.textarea`
  height: 300px;
  width: 100%;
  max-width: 100%;
`
export const Label = styled.label`
  margin-top: 20px;
`
export const Button = styled.button`
  width: 50%;
  height: 30px;
  margin: 20px auto;
  border: none;
  border-radius: 5px;
  background-color: #c4c4c4;
  cursor: pointer;
  &:hover{
    background-color: purple;
    color: white;
  }
`

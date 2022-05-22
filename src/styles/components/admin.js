import styled from 'styled-components'
import { expansion, hidden } from './animations'

export const ActiveAdmin = styled.div`
  @media (min-width: 768px) {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    box-shadow: -3px 10px 10px;
    position: absolute;
    background-color: white;
    animation-name: ${expansion};
    animation-duration: 1s;
    animation-iteration-count: 1;
  }
`

export const AdminDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  text-align: center;
  font-size: 2.0rem;
  animation-name: ${hidden};
  animation-duration: 6s;
  animation-iteration-count: 1;
`
export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 30px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.4rem;
  border: none;
  box-shadow: 3px 3px 9px gray;
  &:focus{
    background-color: #70707026;
    outline: none;
  }
`
export const Select = styled.select`
  width: 100%;
  border-radius: 5px;
  height: 30px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.4rem;
  border: none;
  box-shadow: 3px 3px 9px gray;
  &:focus{
    background-color: #70707026;
    outline: none;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #600d60;
  color: white;
  border: none;
  box-shadow: 3px 3px 9px gray;
  cursor: pointer;
`

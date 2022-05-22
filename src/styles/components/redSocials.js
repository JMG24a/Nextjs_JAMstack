import styled from 'styled-components';

export const Ul = styled.ul`
  display: none;
  position: relative;
  justify-content: center;
  list-style: none;
  margin-top: 20px;
  padding: 0px;
  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 30px;
  }
`
export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 45px;
  height: 45px;
  border: solid 1px white;
  margin: 5px;
  border-radius: 100%;
`

import styled from 'styled-components';

export const Alert = styled.div`
  z-index: 5;
  width: 80%;
  height: auto;
  min-height: 20px;
  padding: 10px;
  position: absolute;
  background-color: #c9c8c8b8;
  border-radius: 5px;
  bottom: 10px;
  right: calc(50% - 40%);
`

export const Message = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`

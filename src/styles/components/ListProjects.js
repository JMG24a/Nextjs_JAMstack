import styled from 'styled-components';

export const List = styled.div`
  width: 95%;
  height: auto;
  margin: 10px auto;
  padding: 10px;
  padding-bottom: 20px;
  font-size: 1.6rem;
  border-bottom: 1px dashed gray;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 2.0rem;
    width: 85%;
  }
  &:nth-child(1){
    margin-top: 30px;
  }
`
export const Anchor = styled.a`
  cursor: pointer;
  font-size: 2.0rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`
export const Paragraph = styled.p`
  font-size: 1.4rem;
  font-weight: lighter;
`

export const KeepReading = styled.a`
  cursor: pointer;
  font-size: 1.6rem;
  padding: 5px;
  border-bottom: 2px solid #955ac8;
`
export const Content = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  color: gray;
`
export const Image = styled.img`
  width: 100%;
  height: auto;
`

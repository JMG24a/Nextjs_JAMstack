import { AiFillFolder } from "react-icons/ai";
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { contraction } from './animations'
import Link from "next/link";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  @media (min-width: 768px) {

  }
`
const gif = 'https://i.pinimg.com/564x/51/5f/c3/515fc394fd01637abf20b4a664a5535f.jpg'
const g = 'https://scontent.fbrm1-1.fna.fbcdn.net/v/t1.6435-9/77407990_2599184233508901_7942453896872460288_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=19026a&_nc_ohc=EPAooL5eCdYAX-K-f3z&_nc_ht=scontent.fbrm1-1.fna&oh=00_AT8UjNeAB7I3yR4cLtD4RC-WY6B0pxgMUJ4U8PeCegUQ2w&oe=62A923F9'
const k = 'https://scontent.fbrm1-1.fna.fbcdn.net/v/t39.30808-6/275138677_100510175929693_4410727841788694218_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=e3f864&_nc_ohc=SDGJj7zL0WwAX9yUHRj&_nc_ht=scontent.fbrm1-1.fna&oh=00_AT-pQcOiTxfT7EjPwNNr5jrSO8E6eYgVJIo-rasyuwBD_g&oe=628836F0'
const cover = 'https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg'

export const Aside = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${gif});
  background-position: calc(50%);
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    position: fixed;
    width: 30%;
    top: 0px;
    bottom: 0px;
  }
`

export const Admin = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80px;
    left: 0px;
    top: 0px;
    border-radius: 0px 0px 100% 0px;
    box-shadow: -3px 10px 10px;
    position: absolute;
    background-color: white;
    animation-name: ${contraction};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }
`
export const Card = styled.div`
  width: 100%;
  align-self: center;
  margin: 0px auto;
  @media (min-width: 768px) {
    width: 100%;
    margin-top: 40vh;
  }
`
export const CardTitle = styled.p`
  width: 70%;
  text-align: center;
  margin: 20px auto;
  font-size: 1.8rem;
  font-weight: bolder;
  color: white;
  @media (min-width: 768px) {
    font-size: 2.8rem;
    -webkit-text-stroke: 2px black;
  }
`
export const CardLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: solid 1px gray;
  background-image: url(${g});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  margin: 0 auto 10px;
  margin-top: 10px;
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`
export const Ul = styled.ul`
  display: none;
  @media (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 40px auto 10px;
    padding: 0px;
    list-style: none;
    font-size: 2.0rem;
    font-weight: bolder;
    color: white;
    cursor: pointer;
  }
`
export const Li = styled.li`
  border-bottom: dashed 1px #c4c4c4;
  padding: 10px 0;
  &:nth-child(1){
    border-top: dashed 1px #c4c4c4;
  }
`
export const A = styled.a`
  &[aria-current] {
    color: gray;
  }
`

export const Section = styled.section`
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin-left: 30%;
    max-width: 70%;
    padding: 10px;
  }
`
// export const Menu = styled(FiMenu)`
//   position: 'absolute';
//   font-size: '40px';
//   right: '10px';
// `
export const FolderIcon = styled(AiFillFolder)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

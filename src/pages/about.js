import Image from "next/image"
import { H2 } from "../styles/components/contact"
const cv = require('../../public/images/cv.png');

export default function About() {
  return (
    <>
      <H2>Sobre mi: </H2>
      <div style={{margin: '-20px auto 0px', width: '80%'}}>
        <Image src={cv} alt='cv'/>
      </div>
    </>
  )
}

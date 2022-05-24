import Image from "next/image"
import { H2 } from "../styles/components/contact"

export default function About() {
  return (
    <>
      <H2>Sobre mi: </H2>
      <div style={{margin: '-20px auto 0px', width: '80%'}}>
        <Image src={'/public/images/cv.png'} alt='cv' width={'100px'} height='100px'/>
      </div>
    </>
  )
}

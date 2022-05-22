import { useEffect } from "react";
import { Ul } from "../styles/components/layout";
import { Link } from "./Link";
import { useRouter } from "next/router";

function Menu() {

  const router = useRouter()
  let isCurrent = router.asPath

  useEffect(()=>{
  },[router.asPath])

  return (
    <Ul>
      <Link href={'/'} name={'Home'} isCurrent={isCurrent}/>
      <Link href={'/about'} name={'Sobre mi'} isCurrent={isCurrent}/>
      <Link href={'/projects'} name={'Proyectos'} isCurrent={isCurrent}/>
      <Link href={'/contact'} name={'Contacto'} isCurrent={isCurrent}/>
    </Ul>
  )
}

export { Menu }

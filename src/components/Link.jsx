import L from "next/link";
import { Li, A } from "../styles/components/layout";

function Link({name, href, isCurrent}) {

  const current = isCurrent === href ? true : null

  return (
    <>
      <Li><L href={`${href}`} ><A aria-current={current}>{name}</A></L></Li>
    </>
  )
}

export { Link }

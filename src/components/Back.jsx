import Link from "next/link";
import { Back as Backing } from '../styles/components/slug';
import {TiArrowBack} from 'react-icons/ti';

function Back({title,href}) {
  return (
    <Backing>
      <Link href={`${href}`}>
        <a><TiArrowBack color="purple"/></a>
      </Link>
      <p>
        {title}
      </p>
    </Backing>
  )
}

export { Back }

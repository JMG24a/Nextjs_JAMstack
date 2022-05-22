import Link from "next/link"
import { RiGithubFill } from "react-icons/ri"
import { Anchor, Content, Image, List } from "../styles/components/ListProjects"
import { Paragraph } from "./Paragraph"

function ListProjects({projects}) {
  return (
    <>
      {projects.map((project, index) => (
        <List key={index}>
          <Link href={`/projects/${project.slug}`}>
            <Anchor>
              {project.title}
            </Anchor>
          </Link>

          <Paragraph>Publicado el {project.date}</Paragraph>

          <Link href={`/projects/${project.slug}`}>
            <Anchor>
              <div>
                <Image src={`${project.image}`} alt={`${project.slug}`} width={'800px'} height={'500px'}  />
              </div>
            </Anchor>
          </Link>

          <div>
            <Content>{project.content}</Content>
          </div>

          <a
            href="https://github.com/JMG24a/homework/tree/master"
            target={'_blank'}
            rel="noreferrer"
          >
            <RiGithubFill cursor={'pointer'} size={'30px'}/>
          </a>
        </List>
      ))}
    </>
  )
}

export { ListProjects }

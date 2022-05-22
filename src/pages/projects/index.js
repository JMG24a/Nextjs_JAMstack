import { ListProjects } from '../../components/ListProjects';
import { getAllFilesMetadata } from '../../lib/md';

export const getStaticProps = async () => {
  const projects = await getAllFilesMetadata('projects')

  return {
    props: {
      projects
    }
  }
}

export default function Portfolio({projects}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', margin: '0 auto'}}>
      <ListProjects projects={projects}/>
    </div>
  )
}

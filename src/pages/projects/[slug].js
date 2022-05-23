import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';

import MDXComponents from '../../components/MDXComponent'
import { getFileBySlug, getFiles } from '../../lib/md';
import { Container } from '../../styles/components/slug'

export async function getStaticProps({ params }) {
  const { source, fromMatter } = await getFileBySlug(params.slug, 'projects')
  return {
    props: {
      source,
      fromMatter
    }
  }
}

export const getStaticPaths = async () => {
  const data = await getFiles('projects')
  const paths = data.map((project) => ({
    params: {
      slug: project.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: true
  }
}


export default function Projects({ source, fromMatter}) {
  const router = useRouter()

  if(router.isFallback){
    return <h2>Loading...</h2>
  }

  return (
    <Container>
      <MDXRemote {...source} components={MDXComponents}/>
    </Container>
  )
}

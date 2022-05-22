import { MDXRemote } from 'next-mdx-remote';
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
  const paths = data.map((post) => ({
    params: {
      slug: post.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export default function Post({ source, fromMatter}) {
  console.log(fromMatter)
  return (
    <Container>
      <MDXRemote {...source} components={MDXComponents}/>
    </Container>
  )
}

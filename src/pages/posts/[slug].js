import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '../../components/MDXComponent'
import { getFileBySlug, getFiles } from '../../lib/md';
import { Container } from '../../styles/components/slug'

export async function getStaticProps({ params }) {
  const { source, fromMatter } = await getFileBySlug(params.slug,'posts')
  return {
    props: {
      source,
      fromMatter
    }
  }
}

export const getStaticPaths = async () => {
  const data = await getFiles('posts')
  const paths = data.map((post) => ({
    params: {
      slug: post.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: true

  }
}


export default function Post({ source, fromMatter}) {
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

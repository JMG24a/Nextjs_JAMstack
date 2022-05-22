import { getAllFilesMetadata } from '../lib/md';
import { ListPost } from '../components/ListPosts';

export const getStaticProps = async () => {
  const posts = await getAllFilesMetadata('posts')

  return {
    props: {
      posts
    }
  }
}

export default function Portfolio({posts}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', margin: '0 auto'}}>
      <ListPost posts={posts}/>
    </div>
  )
}

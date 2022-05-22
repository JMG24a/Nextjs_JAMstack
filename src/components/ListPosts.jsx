import Link from 'next/link';
import { List, Anchor, Paragraph, KeepReading, Content, Image} from '../styles/components/ListPosts'

function ListPost({posts}) {
  return (
    <>
      {posts.map((post, index) => (
        <List key={index}>
          <Link href={`/posts/${post.slug}`}>
            <Anchor>
              {post.title}
            </Anchor>
          </Link>

          <Paragraph>Publicado el {post.date}</Paragraph>

          <Link href={`/posts/${post.slug}`}>
            <Anchor>
              <div>
                <Image src={`${post.image}`} alt={`${post.slug}`} width={'800px'} height={'500px'}  />
              </div>
            </Anchor>
          </Link>

          <div>
            <Content>{post.content}</Content>
          </div>

          <Link href={`/posts/${post.slug}`}>
            <KeepReading>
              {'Sigue leyendo ->'}
            </KeepReading>
          </Link>
        </List>
      ))}
    </>
  )
}

export {ListPost}

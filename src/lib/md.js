import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { getNotionPage } from './notion';

const root = `${process.cwd()}/src`;


export const getFiles = (direction) => fs.readdirSync(path.join(root, `data/${direction}`))


export const getFileBySlug = async ( slug, direction ) => {
  const mdxSource = fs.readFileSync(
    path.join(root, `data/${direction}`, `${slug}.mdx`),
    'utf-8'
  )

  const { data, content} = await matter(mdxSource);
  const source = await serialize(content, {})

  return {
    source,
    fromMatter: {
      slug,
      ...data,
    }
  }
}

export const createPageSlug = async (slug, id, password, direction) => {
  const PP = process.env.PASSWORD;
  if(password !== PP) {
    return false
  }
  const files = getFiles(direction)

  const isItUsed = files.map((item) => item === `${slug}.mdx` ? true : false).filter(item => item === true)
  if(isItUsed[0] === true){
    return false
  }

  const notion = await getNotionPage(id)
  if(notion === null){
    console.log('LOG:')
    return false
  }

  const href = direction === 'posts' ? '/' : '/projects'

  const createMDX = `---
title: '${notion.page.title}'
image: '${notion.page.cover}'
---
<Back title='${notion.page.title}' href='${href}'/>
${notion.paragraph}
`

  fs.writeFile(`${root}/data/${direction}/${slug}.mdx`, createMDX, 'utf-8', () => {
    console.log('created')
  })

  return true
}

export const getAllFilesMetadata = (direction) => {
  const files = getFiles(direction);

  return files.reduce((allPost, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, `data/${direction}`, postSlug),
      'utf-8'
    )

    const { data } = matter(mdxSource)
    return [...allPost ,{ ...data, slug: postSlug.replace('.mdx', '')}]
  },[])
}

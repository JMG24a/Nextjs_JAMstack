import {Client} from '@notionhq/client';


export const getNotionPage = async (id) => {
  const notion = new Client({auth: process.env.NOTION_API})
  try{
    const block = await notion.blocks.children.list({
      block_id: id,
      page_size: 50,
    })

    const page = await notion.pages.retrieve({
      page_id: id,
    })

    const notionPage = {
      title: page.properties.title.title[0].plain_text,
      cover: page.cover.external.url
    }

    const newNode = block.results.map((item) => {
      if(item.type === 'image'){
        return `<Post image='${item.image.external.url}'/>`
      }else if(item.type === 'paragraph'){
        return item.paragraph.rich_text
      }
    })

    const result = newNode.map((item) => {
      let myText = ''
      if(typeof item === 'string'){
        myText = myText + `
  ${item}
  `
      }
      else if(item.length > 0){
        item.map((text) => {
          myText = myText + text.plain_text
        })
      }
      else{
        return null
      }
      return myText;
    })

    const notionText = result.filter(item => item !== null).join()
    const notionResult = {
      page: notionPage,
      paragraph: notionText,
    }

    return notionResult
  }
  catch(error){
    console.error(error)
    return null
  }
}

export const createEmailNotion = async(data) => {
  const notion = new Client({auth: process.env.NOTION_API})
  const {subject, email, body} = data;
  const DId = process.env.NOTION_DATABASE_ID
  try{
    await notion.pages.create({
      parent:{
        database_id: DId
      },
      properties:{
        Subject: {
          title: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Body: {
          rich_text: [
            {
              text: {
                content: body,
              },
            },
          ],
        }
      }
    })
    return true
  }
  catch(e){
    console.error(e)
  }
}

import fs from 'fs';
import path from 'path';

const root = `${process.cwd()}/src`;

export const createEmailMessage = async (data) => {

  const createMessage = `email: ${data.email}
subject: ${data.subject}
body: ${data.body}
`

  const indexEmailTitle = data.email.indexOf('@');;
  const normalizeEmailTitle = data.email.slice(0,indexEmailTitle)
  const normalizeSubjectTitle = data.subject.slice(0,7)

  fs.writeFile(`/${root}/data/emails/${normalizeEmailTitle}-${normalizeSubjectTitle}.txt`, createMessage, 'utf-8', () => {
    console.log('created')
  })

  return true
}

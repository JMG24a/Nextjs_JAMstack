import { createEmailMessage } from "../../lib/email"

export default async function saveEmail(req, res) {
  const data = req.body
  const isCreated = await createEmailMessage(JSON.parse(data))
  res.status(200).json({ status: isCreated })
}

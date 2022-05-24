import { createEmailNotion } from "../../lib/notion";

export default async function saveEmail(req, res) {
  const data = req.body
  const isCreated = await createEmailNotion(JSON.parse(data))
  res.status(200).json({ status: isCreated })
}

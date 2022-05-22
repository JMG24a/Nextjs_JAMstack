// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createPageSlug } from "../../lib/md";

export default async function create(req, res) {
  const {slug, type, id, password} = JSON.parse(req.body)
  const isCreated = await createPageSlug(slug, id, password, type)
  res.status(200).json({ status: isCreated })
}

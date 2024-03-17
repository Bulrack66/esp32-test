

import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataIp = req.body
  const id = await createItem(dataIp)
  res.status(200).json({ id })
}
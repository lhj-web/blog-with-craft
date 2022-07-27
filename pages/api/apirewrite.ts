import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let { url } = req.query;
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,PUT');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );
  if (req.query && req.query.url)
    url = req.query.url;

  try {
    const response = await fetch(url as RequestInfo | URL);
    res.send(await response.json());
  }
  catch (e) {
    res.send(e);
  }
};

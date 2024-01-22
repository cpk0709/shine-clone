/* eslint-disable @typescript-eslint/no-explicit-any */
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { RevalidateType } from '@/types/common';
import { getRevalidatePaths } from '@/utils/common';

const corsOrigin =
  process.env.NEXT_PUBLIC_ENV_STATUS === 'development'
    ? '*'
    : process.env.NEXT_PUBLIC_CMS_ORIGIN;

const cors = Cors({
  origin: corsOrigin,
  methods: ['POST', 'OPTIONS'],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function revalidateHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await runMiddleware(req, res, cors);

  const { secret, type, paths = [] } = req.body;

  if (secret !== process.env.REVALIDATION_SECRET_KEY) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  try {
    const defaultPaths = getRevalidatePaths(type as RevalidateType);
    const revalidatePaths = [...defaultPaths, ...(paths as string[])];

    if (revalidatePaths.length === 0) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    await Promise.all(
      revalidatePaths.map((revalidatePath) => res.revalidate(revalidatePath)),
    );

    return res.status(200).json({ paths: revalidatePaths });
  } catch {
    return res.status(500).json({ error: 'Error revalidating' });
  }
}

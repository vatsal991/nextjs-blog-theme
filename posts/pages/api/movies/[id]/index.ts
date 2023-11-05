import prisma from '../../../../../prisma';
import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  const { id } = req.query;

  try {
    const data = await prisma.movies_metadata.findUnique({
      where: { tmdb: Number(id) },
      include: { images: { select: { path: true } } },
    });

    let related_res = await prisma.movies_metadata.findMany({
      include: { images: { select: { path: true } } },
      take: 10,
      skip: Math.floor(Math.random() * 20000),
    });

    const related = related_res.map((movie) => {
      return {
        title: movie.original_title,
        image: movie.images.path,
        id: movie.tmdb,
        vote: movie.vote_average,
      };
    });

    return res.status(200).send({ data, related });
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong' });
  }
}

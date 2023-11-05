import prisma from "../../../prisma";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  const { page, search, category } = req.query;
  try {
    const condition = {
      AND: [
        { original_title: { contains: search as string } },
        { genres: { contains: category as string } },
      ],
    };
    const [count, data] = await prisma.$transaction([
      prisma.movies_metadata.count({
        where: condition,
      }),
      prisma.movies_metadata.findMany({
        where: condition,
        include: { images: { select: { path: true } } },
        skip: (Number(page) || 1 - 1) * 15,
        take: 15,
      }),
    ]);

    const newData = data.map((movie) => {
      return {
        title: movie.original_title,
        image: movie.images.path,
        id: movie.tmdb,
        vote: movie.vote_average,
      };
    });

    return res.status(200).send({ count, data: newData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !" });
  }
}

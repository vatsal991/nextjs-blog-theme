import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
  const { method } = req;

  switch (method) {
    case "GET": {
      const { email } = req.params;
      return res.status(200).json({ message: "This is test messege!" });
    }
  }
}

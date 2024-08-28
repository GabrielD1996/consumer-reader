import {Request , Response } from   'express'; 

export const confirmCorrect = async (req: Request, res: Response) => {
   res.status(200).send({ message : 'Funcinando a confirmCorrect' });

};

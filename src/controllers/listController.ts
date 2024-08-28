import {Request , Response } from   'express'; 

export const listReadings = async (req: Request, res: Response) => {
   res.status(200).send({ message : 'funcionando rota listReadings'})

};

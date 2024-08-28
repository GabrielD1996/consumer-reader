import {Request , Response } from   'express'; 

export const uploadImage = async (req: Request, res: Response) => {
    try{

        
        res.status(200).send( {message : 'Uploading image'})
    } catch(error){
        res.status(400).send({message : 'Error uploading image'})
    }
};

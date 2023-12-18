import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all posts
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    const result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return res.status(200).json({
        message: result.data
    });
};

export default { getUsers };
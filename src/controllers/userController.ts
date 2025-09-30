import { Request, Response } from "express";
import { User } from "../models/User";

const users: User[] = [
    { id: 1, name: "Pedro" },
    { id: 2, name: "Talita" }
];

export const getUsers = (req: Request, res: Response): void => {
    res.json(users);
};


import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const users = await new ListUsersService().execute();
    return response.json(users);
  }
}

export { ListUsersController };

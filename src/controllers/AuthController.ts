import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const auth = new AuthenticateUserService();
    const token = await auth.execute({ email, password });
    return response.json({
      token: token,
    });
  }
}

export { AuthController };

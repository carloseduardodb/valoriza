import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

type IAuthenticateRequest = {
  email: string;
  password: string;
};

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);
    const user = await userRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Incorrect Credentials");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Incorrect Credentials");
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.PRIVATE_KEY,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };

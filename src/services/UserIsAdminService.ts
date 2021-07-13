import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class UserIsAdminService {
  async execute(id: string) {
    const usersRepository = getCustomRepository(UsersRepositories);
    const user = await usersRepository.findOne(id);
    if (!user) {
      throw new Error("Unauthorized");
    }
    if (!user.admin) {
      throw new Error("Unauthorized");
    }
    return true;
  }
}

export { UserIsAdminService };

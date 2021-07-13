import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagsRepository = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("It is not possible to save an empty value!");
    }

    const tagExists = await tagsRepository.findOne({
      name,
    });

    if (tagExists) {
      throw new Error("This tag already exists");
    }

    const tag = tagsRepository.create({
      name,
    });

    await tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };

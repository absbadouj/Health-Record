import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { CreateUserDto } from "src/dto/user/user.dto";
import { RepositoryInterface } from "src/interfaces/repository.interface";
import { PrismaService } from "src/prisma/service/prisma.service";

@Injectable()
export class UserRepository {

    constructor(private readonly _prismaService: PrismaService) { }

    async findAll(): Promise<User[]> {
        return await this._prismaService.user.findMany({});
    }

    async findById(id: string): Promise<User> {
        return await this._prismaService.user.findUnique({ where: { id } });
    }

    async create(object: CreateUserDto): Promise<User> {
        return await this._prismaService.user.create({ data: object });
    }

    async update(id: string, object: User): Promise<User> {
        return await this._prismaService.user.update({ where: { id }, data: object });
    }

    async delete(id: string): Promise<User> {
        return await this._prismaService.user.delete({ where: { id } });
    }
}
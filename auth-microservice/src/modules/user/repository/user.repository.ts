import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/service/prisma.service";
import { CreateUserDto } from "../../../framework/interfaces/user.dto";

@Injectable()
export class UserRepository {

    constructor(private readonly _prismaService: PrismaService) { }

    async findAll(): Promise<User[]> {
        return await this._prismaService.user.findMany({});
    }

    async findById(id: string): Promise<User> {
        return await this._prismaService.user.findUnique({ where: { id } });
    }

    async findByEmail(email: string) {
        return await this._prismaService.user.findUnique({ where: { email } });
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
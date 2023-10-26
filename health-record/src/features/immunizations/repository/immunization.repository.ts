import { Injectable } from "@nestjs/common";
import { immunizations } from "@prisma/client";
import { RepositoryInterface } from "src/interfaces/repository.interface";
import { PrismaService } from "src/prisma/service/prisma.service";

@Injectable()
export class ImmunizationsRepository implements RepositoryInterface<immunizations> {
    constructor(private readonly _prismaService: PrismaService) { }

    async findAll(): Promise<immunizations[]> {
        return await this._prismaService.immunizations.findMany();
    }

    async findById(id: string): Promise<immunizations> {
        return await this._prismaService.immunizations.findUnique({ where: { id } });
    }

    async create(object: any): Promise<immunizations> {
        return await this._prismaService.immunizations.create({ data: object });
    }

    async update(id: string, object: any): Promise<immunizations> {
        return await this._prismaService.immunizations.update({ where: { id }, data: object });
    }

    async delete(id: string): Promise<immunizations> {
        return await this._prismaService.immunizations.delete({ where: { id } });
    }
}
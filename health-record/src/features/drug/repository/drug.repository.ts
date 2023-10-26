import { Injectable } from "@nestjs/common";
import { Drug } from "@prisma/client";
import { ServiceInterface } from "src/interfaces/service.interface";
import { PrismaService } from "src/prisma/service/prisma.service";

@Injectable()
export class DrugRepository implements ServiceInterface<Drug>{
    constructor(private readonly _prismaService: PrismaService) {
    }
    findOne: (id: string) => void;

    async findAll(): Promise<Drug[]> {
        return await this._prismaService.drug.findMany();
    }

    async findById(id: string): Promise<Drug> {
        return await this._prismaService.drug.findUnique({ where: { id } });
    }

    async create(object: Drug): Promise<Drug> {
        return await this._prismaService.drug.create({ data: object });
    }

    async update(id: string, object: Drug): Promise<Drug> {
        return await this._prismaService.drug.update({ where: { id }, data: object });
    }

    async delete(id: string): Promise<Drug> {
        return await this._prismaService.drug.delete({ where: { id } });
    }
}
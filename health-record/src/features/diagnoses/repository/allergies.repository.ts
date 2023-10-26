import { Injectable } from "@nestjs/common";
import { Diagnoses } from "@prisma/client";
import { RepositoryInterface } from "src/interfaces/repository.interface";
import { PrismaService } from "src/prisma/service/prisma.service";

@Injectable()
export class DiagnosesRepository implements RepositoryInterface<Diagnoses>{
    constructor(private readonly _prismaService: PrismaService) { }

    async findAll(): Promise<Diagnoses[]> {
        return await this._prismaService.diagnoses.findMany();
    }

    async findById(id: string): Promise<Diagnoses> {
        return await this._prismaService.diagnoses.findUnique({ where: { id } });
    }

    async create(object: any): Promise<Diagnoses> {
        return await this._prismaService.diagnoses.create({ data: object });
    }

    async update(id: string, object: any): Promise<Diagnoses> {
        return await this._prismaService.diagnoses.update({ where: { id }, data: object });
    }

    async delete(id: string): Promise<Diagnoses> {
        return await this._prismaService.diagnoses.delete({ where: { id } });
    }
}
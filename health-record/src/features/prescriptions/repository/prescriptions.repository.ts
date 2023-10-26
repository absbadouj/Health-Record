import { Injectable } from "@nestjs/common";
import { Prescriptions, PrismaClient } from "@prisma/client";
import { RepositoryInterface } from "src/interfaces/repository.interface";
import { PrismaService } from "src/prisma/service/prisma.service";

@Injectable()
export class PrescriptionsRepository implements RepositoryInterface<Prescriptions>{
    constructor(private readonly _prismaService: PrismaService) { }

    async findAll(): Promise<Prescriptions[]> {
        return await this._prismaService.prescriptions.findMany();
    }

    async findById(id: string): Promise<Prescriptions> {
        return await this._prismaService.prescriptions.findUnique({ where: { id } });
    }

    async create(object: Prescriptions): Promise<Prescriptions> {
        return await this._prismaService.prescriptions.create({ data: object });
    }

    async update(id: string, object: Prescriptions): Promise<Prescriptions> {
        return await this._prismaService.prescriptions.update({ where: { id }, data: object });
    }

    async delete(id: string): Promise<Prescriptions> {
        return await this._prismaService.prescriptions.delete({ where: { id } });
    }
}
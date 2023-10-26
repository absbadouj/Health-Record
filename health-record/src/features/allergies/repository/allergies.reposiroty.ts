import { Injectable } from '@nestjs/common';
import { Allergies } from '@prisma/client';
import { RepositoryInterface } from 'src/interfaces/repository.interface';
import { PrismaService } from 'src/prisma/service/prisma.service';

@Injectable()
export class AllergiesRepository implements RepositoryInterface<Allergies> {

    constructor(private readonly prismaService: PrismaService) { }

    async findAll(): Promise<Allergies[]> {
        return await this.prismaService.allergies.findMany();
    }

    async findById(id: string): Promise<Allergies> {
        return await this.prismaService.allergies.findUnique({ where: { id } });
    }

    async create(allergie: Allergies): Promise<Allergies> {
        return await this.prismaService.allergies.create({ data: allergie });
    }

    async update(id: string, allergie: Allergies): Promise<Allergies> {
        return await this.prismaService.allergies.update({ where: { id }, data: allergie });
    }

    async delete(id: string): Promise<Allergies> {
        return await this.prismaService.allergies.delete({ where: { id } });
    }
}


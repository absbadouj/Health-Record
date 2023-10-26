import { Injectable } from '@nestjs/common';
import { Drug } from '@prisma/client';
import { ServiceInterface } from 'src/interfaces/service.interface';
import { DrugRepository } from '../repository/drug.repository';

@Injectable()
export class DrugService implements ServiceInterface<Drug>{
    constructor(private readonly _repository: DrugRepository) {
    }

    findAll() {
        this._repository.findAll();
    };

    findOne(id: string) {
        this._repository.findById(id);
    };

    create(object: Drug) {
        this._repository.create(object);
    };

    update(id: string, object: Drug) {
        this._repository.update(id, object);
    };

    delete(id: string) {
        this._repository.delete(id);
    };
}

import { Injectable } from '@nestjs/common';
import { immunizations } from '@prisma/client';
import { ServiceInterface } from 'src/interfaces/service.interface';
import { ImmunizationsRepository } from '../repository/immunization.repository';

@Injectable()
export class ImmunizationsService implements ServiceInterface<immunizations>{
    constructor(private readonly _repository: ImmunizationsRepository) {
    }

    findAll() {
        this._repository.findAll();
    };

    findOne(id: string) {
        this._repository.findById(id);
    };

    create(object: immunizations) {
        this._repository.create(object);
    };

    update(id: string, object: immunizations) {
        this._repository.update(id, object);
    };

    delete(id: string) {
        this._repository.delete(id);
    };
}

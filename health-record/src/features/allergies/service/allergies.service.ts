import { Injectable } from '@nestjs/common';
import { Allergies } from '@prisma/client';
import { ServiceInterface } from 'src/interfaces/service.interface';
import { AllergiesRepository } from '../repository/allergies.reposiroty';

@Injectable()
export class AllergiesService implements ServiceInterface<Allergies> {
    constructor(private readonly _repository: AllergiesRepository) {

    }
    findAll() {
        this._repository.findAll();
    };

    findOne(id: string) {
        this._repository.findById(id);
    };

    create(object: Allergies) {
        this._repository.create(object);
    };

    update(id: string, object: Allergies) {
        this._repository.update(id, object);
    };

    delete(id: string) {
        this._repository.delete(id);
    };

}

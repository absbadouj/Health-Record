import { Injectable } from '@nestjs/common';
import { Diagnoses } from '@prisma/client';
import { ServiceInterface } from 'src/interfaces/service.interface';
import { DiagnosesRepository } from '../repository/allergies.repository';

@Injectable()
export class DiagnosesService implements ServiceInterface<Diagnoses> {
    constructor(private readonly _repository: DiagnosesRepository) {
    }

    findAll() {
        this._repository.findAll();
    };

    findOne(id: string) {
        this._repository.findById(id);
    };

    create(object: Diagnoses) {
        this._repository.create(object);
    };

    update(id: string, object: Diagnoses) {
        this._repository.update(id, object);
    };

    delete(id: string) {
        this._repository.delete(id);
    };
}

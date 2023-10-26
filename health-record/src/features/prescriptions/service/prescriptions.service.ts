import { Injectable } from '@nestjs/common';
import { Prescriptions } from '@prisma/client';
import { ServiceInterface } from 'src/interfaces/service.interface';
import { PrescriptionsRepository } from '../repository/prescriptions.repository';

@Injectable()
export class PrescriptionsService implements ServiceInterface<Prescriptions>{
    constructor(private readonly _repository: PrescriptionsRepository) {

    } findAll() {
        this._repository.findAll();
    }
    findOne(id: string) {
        this._repository.findById(id);
    }
    create(object: Prescriptions) {
        this._repository.create(object);
    }
    update(id: string, object: Prescriptions) {
        this._repository.update(id, object);
    }
    delete(id: string) {
        this._repository.delete(id);
    }
};

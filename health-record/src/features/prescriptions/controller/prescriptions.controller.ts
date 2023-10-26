import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Prescriptions } from '@prisma/client';
import { ControllerInterface } from 'src/interfaces/controller.interface';
import { PrescriptionsService } from '../service/prescriptions.service';

@Controller('prescriptions')
export class PrescriptionsController implements ControllerInterface<Prescriptions> {
    constructor(private readonly _prescriptionsServices: PrescriptionsService) { }

    @Get()
    findAll() {
        this._prescriptionsServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        this._prescriptionsServices.findOne(id);
    }

    @Post()
    create(@Body() prescription: Prescriptions) {
        this._prescriptionsServices.create(prescription);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() prescription: Prescriptions) {
        this._prescriptionsServices.update(id, prescription);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this._prescriptionsServices.delete(id);
    }

}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Diagnoses } from '@prisma/client';
import { ControllerInterface } from 'src/interfaces/controller.interface';
import { DiagnosesService } from '../service/diagnoses.service';

@Controller('diagnoses')
export class DiagnosesController implements ControllerInterface<Diagnoses> {
    constructor(private readonly _diagnosesServices: DiagnosesService) { }

    @Get()
    findAll() {
        this._diagnosesServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        this._diagnosesServices.findOne(id);
    }

    @Post()
    create(@Body() diagnose: Diagnoses) {
        this._diagnosesServices.create(diagnose);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() diagnose: Diagnoses) {
        this._diagnosesServices.update(id, diagnose);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this._diagnosesServices.delete(id);
    }
}

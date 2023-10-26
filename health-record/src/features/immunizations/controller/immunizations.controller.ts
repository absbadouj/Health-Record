import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { immunizations } from '@prisma/client';
import { ControllerInterface } from 'src/interfaces/controller.interface';
import { ImmunizationsService } from '../service/immunizations.service';

@Controller('immunizations')
export class ImmunizationsController implements ControllerInterface<immunizations> {
    constructor(private readonly _immunizationsService: ImmunizationsService) { }

    @Get()
    findAll() {
        this._immunizationsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        this._immunizationsService.findOne(id);
    }

    @Post()
    create(@Body() immunization: immunizations) {
        this._immunizationsService.create(immunization);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() immunization: immunizations) {
        this._immunizationsService.update(id, immunization);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this._immunizationsService.delete(id);
    }

}

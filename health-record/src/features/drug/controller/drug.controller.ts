import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Drug } from '@prisma/client';
import { ControllerInterface } from 'src/interfaces/controller.interface';
import { DrugService } from '../service/drug.service';

@Controller('drug')
export class DrugController implements ControllerInterface<Drug>{
    constructor(private readonly _drugServices: DrugService) {

    }

    @Get()
    findAll() {
        this._drugServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        this._drugServices.findOne(id);
    }

    @Post()
    create(@Body() drug: Drug) {
        this._drugServices.create(drug);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() drug: Drug) {
        this._drugServices.update(id, drug);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this._drugServices.delete(id);
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Allergies } from '@prisma/client';
import { ControllerInterface } from 'src/interfaces/controller.interface';
import { AllergiesService } from '../service/allergies.service';

@Controller('allergies')
export class AllergiesController implements ControllerInterface<Allergies> {

    constructor(private readonly allergiesServices: AllergiesService) { }


    @Get()
    findAll() {
        this.allergiesServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        this.allergiesServices.findOne(id);
    }

    @Post()
    create(@Body() allergie: Allergies) {
        this.allergiesServices.create(allergie);
    }

    @Put(':id')
    update(@Param('id') id: string, allergie: Allergies) {
        this.allergiesServices.update(id, allergie);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this.allergiesServices.delete(id);
    }
}

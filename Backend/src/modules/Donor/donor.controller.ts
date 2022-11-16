import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import Donor from './entities/donor.entity';
import { DonorService } from './donor.service';
import { DonorDto } from './dto/donor.dto';

@Controller('donors')
export class DonorController {
    constructor(private readonly donorService: DonorService) {}

    @Get()
    async getDonors(): Promise<Donor[]> {
        try {
            return await this.donorService.getDonors();
        } catch(err) {
            console.log(err);
        }
    }

    @Get('/:id')
    async getDonor(@Param('id') id: number): Promise<Donor> {
        try {
            return await this.donorService.getDonor(id);
        } catch(err) {
            throw new NotFoundException("Doador não encontrado.");
        }
    }

    @Post()
    async createDonor(@Body() donor: DonorDto): Promise<Object> {
        await this.donorService.createDonor(donor);
        return donor;
    }

    @Put('/:id')
    async updateDonor(@Param('id') id: number, @Body() payload: Object) {
        await this.donorService.updateDonor(id, payload)
        return this.donorService.getDonor(id);
    }

    @Delete('/:id')
    async deleteDonor(@Param('id') id: number): Promise<Object> {
        await this.donorService.deleteDonor(id);
        return { message: `Doador com id ${id} excluído com sucesso!`};
    } 
}
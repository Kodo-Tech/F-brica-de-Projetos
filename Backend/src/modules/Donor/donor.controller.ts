import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import Donor from './entities/donor.entity';
import { DonorService } from './donor.service';
import { DonorDto } from './dto/donor.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@ApiTags('Donors')
@Controller('donors')
export class DonorController {
    constructor(private readonly donorService: DonorService) {}

    @ApiOperation({ description: "Lists all the donors registered on the database" })
    @ApiOkResponse({ description: 'The resources were returned successfully' })
    @Get()
    async getDonors(): Promise<Donor[]> {
        try {
            return await this.donorService.getDonors();
        } catch(err) {
            console.log(err);
        }
    }

    @ApiOperation({ description: "Lists a specific donor registered on the database" })
    @ApiOkResponse({ description: 'The resources were returned successfully' })
    @ApiNotFoundResponse({ description: 'Resource not found' })
    @Get('/:id')
    async getDonor(@Param('id') id: number): Promise<Donor> {
        try {
            return await this.donorService.getDonor(id);
        } catch(err) {
            throw new NotFoundException("Doador não encontrado.");
        }
    }

    @ApiOperation({ description: "Creates a new donor into the database" })
    @ApiCreatedResponse({ description: 'Created Succesfully' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @Post()
    async createDonor(@Body() donor: DonorDto): Promise<Object> {
        await this.donorService.createDonor(donor);
        return donor;
    }

    @ApiOperation({ description: "Updates an existing donor into the database" })
    @ApiOkResponse({ description: 'The resource was updated successfully' })
    @ApiNotFoundResponse({ description: 'Resource not found' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @Put('/:id')
    async updateDonor(@Param('id') id: number, @Body() payload: Object) {
        await this.donorService.updateDonor(id, payload)
        return this.donorService.getDonor(id);
    }

    @ApiOperation({ description: "Deletes an existing donor into the database" })
    @ApiOkResponse({ description: 'The resource was returned successfully' })
    @ApiNotFoundResponse({ description: 'Resource not found' })
    @Delete('/:id')
    async deleteDonor(@Param('id') id: number): Promise<Object> {
        await this.donorService.deleteDonor(id);
        return { message: `Doador com id ${id} excluído com sucesso!`};
    } 
}
import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { DonationService } from './donation.service';
import { DonationDto } from './dto/donation.dto';
import Donation from './entities/donation.entity';

@ApiTags('Donations')
@Controller('donations')
export class DonationController {
    constructor(private readonly donationService: DonationService) {}

    @ApiOperation({ description: "Lists all the donations registered on the database" })
    @ApiOkResponse({ description: 'The resources were returned successfully' })
    @Get()
    async getDonations(): Promise<Donation[]> {
        try {
            return await this.donationService.getDonations();
        } catch(err) {
            console.log(err);
        }
    }

    @ApiOperation({ description: "Lists a specific donation registered on the database" })
    @ApiOkResponse({ description: 'The resources were returned successfully' })
    @ApiNotFoundResponse({ description: 'Resource not found' })
    @Get('/:id')
    async getDonor(@Param('id') id: number): Promise<Donation> {
        try {
            return await this.donationService.getDonation(id);
        } catch(err) {
            throw new NotFoundException("Doação não encontrada.");
        }
    }
    
    @ApiOperation({ description: "Creates a new donation into the database" })
    @ApiCreatedResponse({ description: 'Created Succesfully' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @Post()
    async createDonation(@Body() donation: DonationDto): Promise<Object> {
        await this.donationService.createDonation(donation);
        return donation;
    }
}
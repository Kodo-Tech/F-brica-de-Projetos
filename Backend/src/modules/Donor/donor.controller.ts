import { Controller, Get } from '@nestjs/common';
import Donor from './entities/donor.entity';
import { DonorService } from './donor.service';

@Controller('donors')
export class DonorController {
    constructor(private readonly donorService: DonorService) {}

    @Get()
    async findAll(): Promise<Donor[]> {
        try {
            return await this.donorService.getDonors();
        } catch(err) {
            console.log(err);
        }
    }
}
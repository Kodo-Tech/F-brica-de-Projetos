import { Controller, Get } from '@nestjs/common';
import Donor from './entities/donation.entity';
import { DonationService } from './donation.service';

@Controller('donations')
export class DonationController {

}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import Donation from './entities/donation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Donation])],
    providers: [DonationService],
    controllers: [DonationController],
    exports: [DonationModule],
})

export class DonationModule {}
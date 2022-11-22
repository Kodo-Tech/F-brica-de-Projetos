import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { DonationDto } from './dto/donation.dto';
import Donation from './entities/donation.entity';

@Injectable()
export class DonationService {
    constructor(@InjectRepository(Donation) private donationRepository: Repository<Donation>, private dataSource: DataSource) {}

    async getDonations(): Promise<Donation[]> {
        return await this.donationRepository.find();
    }

    async getDonation(id: number): Promise<Donation> {
        const donor = await this.donationRepository.findOne({ where: { id } });
        if(!donor) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return donor;
    }

    async createDonation(donation: DonationDto): Promise<void> {
        await this.donationRepository.save(donation);
    }
}
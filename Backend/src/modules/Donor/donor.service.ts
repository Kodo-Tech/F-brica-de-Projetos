import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { DonorDto } from './dto/donor.dto';
import Donor from './entities/donor.entity';

@Injectable()
export class DonorService {
    constructor(@InjectRepository(Donor) private donorRepository: Repository<Donor>, private dataSource: DataSource) {}

    async getDonors(): Promise<Donor[]> {
        return await this.donorRepository.find();
    }

    async getDonor(id: number): Promise<Donor> {
        const donor = await this.donorRepository.findOne({ where: { id } });
        if(!donor) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return donor;
    }

    async getDonorByEmail(email: string): Promise<Donor> {
        const donor = await this.dataSource.query(`SELECT * FROM donor WHERE email = '${email}'`)
        return donor;
    }

    async createDonor(donor: DonorDto): Promise<void> {
        await this.donorRepository.save(donor);
    }

    async updateDonor(id: number, payload: { name?: string, email?: string, password?: string, phone?: string }) {
        await this.donorRepository.update({ id: id }, payload);
    }

    async deleteDonor(id: number): Promise<void> {
        await this.donorRepository.delete(id);
    }
}
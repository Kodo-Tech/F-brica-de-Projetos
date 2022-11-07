import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import Donation from './entities/donation.entity';

@Injectable()
export class DonationService {
    
}
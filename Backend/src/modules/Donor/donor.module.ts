import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonorService } from './donor.service';
import { DonorController } from './donor.controller';
import Donor from './entities/donor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Donor])],
    providers: [DonorService],
    controllers: [DonorController],
    exports: [DonorModule],
})

export class DonorModule {}
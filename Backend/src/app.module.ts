import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Donor from './modules/Donor/entities/donor.entity';
import Donation from './modules/Donation/entities/donation.entity';
import { DonorModule } from './modules/Donor/donor.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DonationModule } from './modules/Donation/donation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('MYSQL_HOST'),
        port: configService.get<number>('MYSQL_PORT'),
        username: configService.get<string>('MYSQL_USER'),
        password: configService.get<string>('MYSQL_PASSWORD'),
        database: configService.get<string>('MYSQL_DB'),
        entities: [Donor, Donation],
        synchronize: false,
        logging: configService.get<boolean>('DB_LOGGING'),
      }),
      inject: [ConfigService],
    }),
    DonorModule,
    DonationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

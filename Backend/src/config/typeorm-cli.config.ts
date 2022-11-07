import { DataSource } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { config } from 'dotenv';
import  Donor  from '../modules/Donor/entities/donor.entity'
import Donation from '../modules/Donation/entities/donation.entity'
import { donor1667345048873 } from "src/migrations/1667345048873-donor";
import { donation1667346621598 } from "src/migrations/1667346621598-donation";
import { donorData1667408810134 } from "src/migrations/1667408810134-donor_data";
import { donationData1667414290083 } from "src/migrations/1667414290083-donation_data";

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'mysql',
    host: configService.get<string>('MYSQL_HOST'),
    port: configService.get<number>('MYSQL_PORT'),
    username: configService.get<string>('MYSQL_USER'),
    password: configService.get<string>('MYSQL_PASSWORD'),
    database: configService.get<string>('MYSQL_DB'),
    logging: configService.get<boolean>('DB_LOGGING'),
    synchronize: false,
    entities: [Donor, Donation],
    migrations: [donor1667345048873, donation1667346621598, donorData1667408810134, donationData1667414290083],
})
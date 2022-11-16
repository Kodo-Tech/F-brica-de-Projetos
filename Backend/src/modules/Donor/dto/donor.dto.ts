import { DonationDto } from "src/modules/Donation/dto/donation.dto";

export class DonorDto {
    
    name: string;
    
    email: string;

    password: string;

    phone: string;

    donations?: DonationDto[];
}
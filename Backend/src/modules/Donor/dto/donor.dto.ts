import { ApiProperty } from "@nestjs/swagger";
import { DonationDto } from "src/modules/Donation/dto/donation.dto";

export class DonorDto {

    @ApiProperty()
    name: string;
    
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    donations?: DonationDto[];
}
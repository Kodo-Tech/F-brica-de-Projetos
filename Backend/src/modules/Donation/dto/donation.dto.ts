import { ApiProperty } from "@nestjs/swagger";

export class DonationDto {

    @ApiProperty()
    donorId: number;

    @ApiProperty()
    foodBasketQty: number;

    @ApiProperty()
    value: number;

}
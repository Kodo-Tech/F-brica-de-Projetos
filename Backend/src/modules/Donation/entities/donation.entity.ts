import Donor from 'src/modules/Donor/entities/donor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
class Donation {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    created_at: Date;

    @Column()
    foodBasketQty: number;

    @Column()
    value: number;

    @ManyToOne(() => Donor, donor => donor.donations)
    @JoinColumn([
        { name: 'donorId', referencedColumnName: 'id' }
    ])
    donor: Donor;
}

export default Donation;
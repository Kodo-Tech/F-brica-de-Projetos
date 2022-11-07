import Donation from 'src/modules/Donation/entities/donation.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
class Donor {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @OneToMany(() => Donation, donation => donation.donor, { cascade: true, eager: true })
    donations: Donation[];
}

export default Donor;
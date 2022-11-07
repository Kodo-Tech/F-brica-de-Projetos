import { MigrationInterface, QueryRunner } from "typeorm"

export class donationData1667414290083 implements MigrationInterface {

    protected tableName = 'donation';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO ${this.tableName} (foodBasketQty, value, donorId) 
            VALUES 
            (2, 100.00, 1)
        `)
        // await queryRunner.manager
        // .createQueryBuilder()
        // .insert()
        // .into(this.tableName, ['foodBasketQty', 'value', 'donorId'])
        // .values([
        //     { foodBasketQty: 2, value: 100.00, donorId: 1 },
        // ])
        // .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM ${this.tableName}`)
    }

}

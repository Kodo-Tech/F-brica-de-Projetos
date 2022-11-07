import { MigrationInterface, QueryRunner } from "typeorm"

export class donorData1667408810134 implements MigrationInterface {

    protected tableName = 'donor';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(this.tableName)
        .values([
            { name: 'Alex Silva', email: 'alex.silva@email.com', password: '11223344', phone: '(15)3322-4455' },
            { name: 'Nelson Martins', email: 'nelson.martins@email.com', password: '76327423', phone: '(11)3531-4455' },
            { name: 'Saigoreis Santos', email: 'saigo.santos@email.com', password: '6653edas', phone: '(43)2352-4574' },
            { name: 'Lenilton Souza', email: 'leno.souza@email.com', password: 'ldgooe21', phone: '(62)7513-8321' },
        ])
        .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM ${this.tableName}`);
    }

}

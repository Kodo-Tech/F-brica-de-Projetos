import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class donor1667345048873 implements MigrationInterface {

    protected tableName = 'donor';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar(100)',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar(100)',
                        isNullable: false,
                    },
                    {
                        name: 'password',
                        type: 'varchar(8)',
                        isNullable: false,
                    },
                    {
                        name: 'phone',
                        type: 'varchar(20)',
                        isNullable: true,
                    },
                ]
            }),
            true,
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}

import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm"

export class donation1667346621598 implements MigrationInterface {

    protected tableName = 'donation';

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
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'foodBasketQty',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'value',
                        type: 'decimal(5, 2)',
                        isNullable: false,
                    },
                    {
                        name: 'donorId',
                        type: 'int',
                        isNullable: false,
                    },
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            this.tableName,
            new TableForeignKey({
                columnNames: ['donorId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'donor',
                onDelete: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable(this.tableName)
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('donorId') !== -1,
        )
        await queryRunner.dropForeignKey(this.tableName, foreignKey)
        await queryRunner.dropTable(this.tableName);
    }

}

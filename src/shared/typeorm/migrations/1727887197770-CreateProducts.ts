import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1727887197770 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

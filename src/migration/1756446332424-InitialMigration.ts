import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1756446332424 implements MigrationInterface {
  name = "InitialMigration1756446332424";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "Name" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("user")
      .values([
        { Name: "John Doe", isActive: true },
        { Name: "Jane Doe", isActive: true },
      ])
      .orIgnore()
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}

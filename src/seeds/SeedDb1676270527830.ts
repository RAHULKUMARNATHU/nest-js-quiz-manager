import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1676270527830 implements MigrationInterface {
  name = 'SeedDb1676270527830';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users (name , email , password ,role ) VALUES ('Nathu' , 'user131@gmail.com' , '$2b$10$Ta91.Hkft76V9hTSlBnSteITDgn9rLfiRMfrq.ms7WaLnhhhljMTO','admin')`,
    );
  }

  public async down(): Promise<void> {}
}

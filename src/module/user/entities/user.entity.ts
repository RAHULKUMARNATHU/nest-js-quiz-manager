import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({ description: 'Primary key as User Id', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'user name',
    example: 'user',
  })
  @Column()
  name: string;

  @ApiProperty({ description: 'user email address', example: 'user@gmail.com' })
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty({ description : 'Hashed user password'})
  @Column()
  password: string;

  @ApiProperty({description:'Role of user'})
  @Column({
    default:'member'
  })
  role:string

  @ApiProperty({description:'when user was created'})
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({description:'when user was updated'})
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}

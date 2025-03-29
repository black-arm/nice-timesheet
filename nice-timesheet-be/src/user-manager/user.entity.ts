import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
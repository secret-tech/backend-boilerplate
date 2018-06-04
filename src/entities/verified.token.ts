import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import 'reflect-metadata';

@Entity()
export class VerifiedToken {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  token: string;

  @Column()
  verified: boolean;
}

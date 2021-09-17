import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export class Cat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
    name: string;

  @Column({
    default: 'sky-blue pink'
  })
    color: string;

  @Column({
    default: 'moggy',
  })
    breed: string;

  @Column()
    age: number;

  // @Column({
  //   type: 'bytea',
  //   nullable: true,
  // }
  //   )
  //   photo: Buffer;

  @Column({
    nullable: true,
  }
    )
    photo: string;

  @Column()
    price: number;

  @Column({
    type: 'bool',
    default: false,
  })
    isBooked: boolean;
}
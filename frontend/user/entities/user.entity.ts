import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class UserMessage extends Model {
  @Column message: string;
}


// this is the user entityyy
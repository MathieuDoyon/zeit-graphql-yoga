import {
    Entity,
    ObjectID,
    ObjectIdColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { ObjectIdScalar } from '../scalar/ObjectIdScalar';

@Entity('profiles')
@ObjectType()
export class Profile {
    @Field(type => ObjectIdScalar)
    @ObjectIdColumn({ name: '_id' })
    readonly id: ObjectID;

    @Field()
    @CreateDateColumn()
    created: Date;

    @Field()
    @UpdateDateColumn()
    updated: Date;

    @Field()
    @Column()
    name: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    description: string;
}

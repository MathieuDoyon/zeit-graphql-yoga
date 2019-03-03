import { Profile } from '../../entity/Profile';
import { InputType, Field } from 'type-graphql';

@InputType()
export class ProfileInput implements Partial<Profile> {
    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;
}

import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

import { ProfileSortInput } from './ProfileSortInput';

@ArgsType()
export class ProfileArgs {
    @Field(type => Int)
    @Min(0)
    skip: number = 0;

    @Field(type => Int)
    @Min(1)
    @Max(50)
    take: number = 25;

    @Field(type => [ProfileSortInput], { nullable: true })
    sort: ProfileSortInput[] = [];
}

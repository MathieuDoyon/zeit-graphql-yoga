import { Field, InputType } from 'type-graphql';

import { ProfileSortField } from '../../enums/ProfileSortField';
import { SortDirection } from '../../enums/SortDirection';

@InputType()
export class ProfileSortInput {
    @Field(type => ProfileSortField)
    field: ProfileSortField;

    @Field(type => SortDirection)
    direction: SortDirection;
}

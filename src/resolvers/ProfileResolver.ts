import * as R from 'ramda';
import {
    Arg,
    Args,
    FieldResolver,
    Query,
    Resolver,
    ResolverInterface,
    Root,
    Mutation
} from 'type-graphql';
import { Connection, getMongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

import { Database } from '../Database';
import { plainToClass } from 'class-transformer';

import { Profile } from '../entity/Profile';
import { ProfileArgs } from './types/ProfileArgs';
import { ProfileInput } from './types/ProfileInput';
// import { ProfileSortInput } from './types/ProfileSortInput';

import { createProfileSamples } from '../profiles-samples';

@Resolver(of => Profile)
export class ProfileResolver {
    private readonly items: Profile[] = createProfileSamples();

    @Query(returns => [Profile])
    async profiles(@Args() { take, skip, sort }: ProfileArgs): Promise<
        Profile[]
    > {
        // const database = new Database();
        // const dbConn: Connection = await database.getConnection();
        // const profileRepository = dbConn.getMongoRepository(Profile);
        // const getSorting = R.pipe(
        //     R.map<ProfileSortInput, any>(item => ({
        //         [item.field]: item.direction
        //     })),
        //     R.mergeAll
        // );

        // return profileRepository.find({
        //     take,
        //     skip
        //     // profile: getSorting(sort)
        // });

        return await this.items;
    }

    @Query(returns => Profile)
    async profile(@Arg('name') name: string): Promise<Profile> {
        // const database = new Database();
        // const dbConn: Connection = await database.getConnection();
        // const profileRepository = getMongoRepository(Profile);
        // return profileRepository.findOne({
        //     // @ts-ignore
        //     _id: ObjectID(id)
        // });

        return await this.items.find(profile => profile.name === name);
    }

    @Mutation(returns => Profile)
    async addProfile(
        @Arg('profile') profileInput: ProfileInput
    ): Promise<Profile> {
        const profile = plainToClass(Profile, {
            description: profileInput.description,
            name: profileInput.name,
            created: new Date(),
            updated: new Date()
        });

        await this.items.push(profile);

        return profile;
    }
}

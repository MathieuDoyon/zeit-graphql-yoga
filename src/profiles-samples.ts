import { plainToClass } from 'class-transformer';

import { Profile } from './entity/Profile';

export function createProfileSamples() {
    return plainToClass(Profile, [
        {
            description: 'Desc 1',
            name: 'Profile 1',
            created: new Date('2018-04-11'),
            updated: new Date('2018-04-11')
        },
        {
            description: 'Desc 2',
            name: 'Profile 2',
            created: new Date('2018-04-15'),
            updated: new Date('2018-04-15')
        },
        {
            description: 'Desc 3',
            name: 'Profile 3',
            created: new Date(),
            updated: new Date()
        }
    ]);
}

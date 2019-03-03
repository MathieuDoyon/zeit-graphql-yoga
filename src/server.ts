import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import { buildSchemaSync, registerEnumType } from 'type-graphql';

import { ProfileSortField } from './enums/ProfileSortField';
import { SortDirection } from './enums/SortDirection';
import { ProfileResolver } from './resolvers/ProfileResolver';

// export interface Context {}

const context = {
    // ... anything you want to put into context
};

registerEnumType(ProfileSortField, { name: 'ProfileSortField' });
registerEnumType(SortDirection, { name: 'SortDirection' });

const schema = buildSchemaSync({
    resolvers: [ProfileResolver]
    // emitSchemaFile: true // DEV if we want to gql file
});

const options = {
    port: 4000
};

const server = new GraphQLServer({
    schema,
    context
});

server.start(
    // @ts-ignore
    options,
    () => console.log('Server is running on localhost:' + options.port)
);

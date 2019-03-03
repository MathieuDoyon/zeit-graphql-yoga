import {
    Connection,
    ConnectionManager,
    ConnectionOptions,
    createConnection,
    getConnectionManager
} from 'typeorm';
import { Profile } from './entity/Profile';

export class Database {
    private connectionManager: ConnectionManager;

    constructor() {
        this.connectionManager = getConnectionManager();
    }

    public async getConnection(): Promise<Connection> {
        const CONNECTION_NAME = `default`;

        let connection: Connection;

        if (this.connectionManager.has(CONNECTION_NAME)) {
            connection = await this.connectionManager.get(CONNECTION_NAME);

            if (!connection.isConnected) {
                connection = await connection.connect();
            }
        } else {
            const connectionOptions: ConnectionOptions = {
                type: 'mongodb',
                useNewUrlParser: true,
                url: 'your-database-connection-here',
                logging: false,
                entities: [Profile]
            };

            connection = await createConnection(connectionOptions);
        }

        return connection;
    }
}

import * as mongoose from 'mongoose';
import { DevKeys } from '../../../keys/keys.dev';
import { DatabaseProviderName } from '../enums/DatabaseProviderName';

export const databaseProvider = [
  {
    provide: DatabaseProviderName.Connection,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(DevKeys.MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }),
  },
];

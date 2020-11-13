import { Connection } from 'mongoose';
import { UserSchema } from '../models/User.schema';
import { userModelName } from '../constants/userModelName';
import { ProviderName } from '../../../../../dist/shared/providers/enums/ProviderName';
import { UserProviderName } from '../enums/UserProviderName';

export const userProvider = [
  {
    provide: UserProviderName.UserModel,
    useFactory: (connection: Connection) => connection.model(userModelName, UserSchema),
    inject: [ProviderName.DbConnection],
  },
];

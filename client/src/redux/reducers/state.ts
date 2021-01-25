import { CustomAny } from '../../shared/types/CustomAny';
import { Auth, CardState, User } from '../../types';

export interface RootState {
  router: CustomAny;
  auth: Auth;
  user: User;
  card: CardState;
}

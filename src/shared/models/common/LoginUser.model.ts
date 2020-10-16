import { UserModel } from 'src/shared/models';

export class LoginUserModel {
  id: string;
  ttl: string | number;
  created: string;
  userId: string | number;
  user: UserModel;
}

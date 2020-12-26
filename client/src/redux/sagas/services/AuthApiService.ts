import axios from 'axios';
import { signInUrl } from '../../constants/auth';
import { SignIn } from '../../../types';

export default class AuthApiService {
  static async signIn(signIn: SignIn) {
    return await axios.post(signInUrl, signIn);
  }
}

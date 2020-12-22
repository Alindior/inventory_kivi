import axios from 'axios';

import { InputUserDto } from '../interfaces/InputUser.dto';
import { API_PATH } from '../../../shared/constants/apiPath';

export default class AuthenticationApiService {
  static async singIn(inputUser: InputUserDto) {
    const { data } = await axios.post(`${API_PATH}/auth/signIn`, inputUser);
    console.log(data, 'AuthToken');
  }

  static async singUp(inputUser: InputUserDto) {
    const { data } = await axios.post(`${API_PATH}/auth/signUp`, inputUser);
    console.log(data, 'Registred');
  }
}

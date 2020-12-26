import jwtDecode from 'jwt-decode';

export default class JwtService {
  static decodeJwtToken(token: string) {
    return jwtDecode(token);
  }
}

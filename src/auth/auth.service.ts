import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'Signed up from service';
  }

  signin() {
    return 'I am signed in from service ';
  }
}

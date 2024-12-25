import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return 'Signed up from service';
  }

  signin() {
    return 'I am signed in from service ';
  }
}

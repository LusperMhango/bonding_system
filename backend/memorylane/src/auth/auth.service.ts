import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDbService } from 'src/auth_db/auth_db.service';


@Injectable()
  export class AuthService {
    constructor(
      private usersService: AuthDbService,
      private jwtServices: JwtService,
    ){}
    async validateUser(email: string, password: string): Promise<any> {
      const user = await this.usersService.findOneByUser(email);
      if (user && user.password === password) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
    async login(user: any) {
      const payload = {username: user.email, sub: user.RegNumber};
      return {
        access_token: this.jwtServices.sign(payload)
      };
    }
  }

  

import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { VerificationService } from './verification.service';
import { AuthGuard } from '@nestjs/passport';

interface AuthenticatedRequest extends Request {
  user?: {
    RegNumber: string;
  };
}
@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService){}
  @UseGuards(AuthGuard('jwt'))
  @Get('/bondstatus')
  async checkBondingStatus(@Req() req: AuthenticatedRequest): Promise<string> {
    if (!req.user || !req.user.RegNumber) {
   return 'Regnumber not found in request';
    }
    const Regno = req.user.RegNumber;
    return this.verificationService.verifystudentBonding(Regno);
  }
  
}

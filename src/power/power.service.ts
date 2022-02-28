import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    console.log(`we need ${watts} to power you up🔋🔌`)
  }
}

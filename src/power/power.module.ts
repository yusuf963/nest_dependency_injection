import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  //By default module are private, but you can export the services by adding the export property to the modul decorator as an array as below
  exports: [PowerService]
})
export class PowerModule {}

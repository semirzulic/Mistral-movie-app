import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';
import { DatePipe } from './date.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [TimePipe, DatePipe, SafePipe],
  exports: [TimePipe, DatePipe, SafePipe],
  imports: [CommonModule],
})
export class PipeModule {}

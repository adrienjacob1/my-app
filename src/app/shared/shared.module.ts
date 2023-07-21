import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago';
import { ShortenPipe } from './pipes/shorten';
import { HighLightDirective } from './directives/highlights';



@NgModule({
  declarations: [
    TimeAgoPipe,
    ShortenPipe,
    HighLightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeAgoPipe,
    ShortenPipe,
    HighLightDirective
  ]
})
export class SharedModule { }

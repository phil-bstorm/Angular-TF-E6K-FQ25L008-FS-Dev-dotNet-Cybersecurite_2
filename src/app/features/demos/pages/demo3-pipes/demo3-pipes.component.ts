import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { ReverseTextPipe } from '../../../../shared/pipes/reverse-text.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo3-pipes',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    JsonPipe,
    SlicePipe,
    ReverseTextPipe,
    FormsModule,
  ],
  templateUrl: './demo3-pipes.component.html',
  styleUrl: './demo3-pipes.component.scss',
})
export class Demo3PipesComponent {
  uneDate: Date = new Date();

  username: string = 'Plow';
}

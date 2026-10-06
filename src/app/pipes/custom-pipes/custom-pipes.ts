import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from './currencyConvertor/currency-convertor-pipe';

@Component({
  imports: [CurrencyConvertorPipe],
  selector: 'app-custom-pipes',
  styleUrl: './custom-pipes.css',
  templateUrl: './custom-pipes.html',
})
export class CustomPipes {
  amount = 100;
}

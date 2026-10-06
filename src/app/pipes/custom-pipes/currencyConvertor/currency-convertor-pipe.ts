import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
})
export class CurrencyConvertorPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: number, ...args: number[]): unknown {
    console.log('args', args);
    const currencyArgValue: number = args[0];
    //handling the parameters of the pipe if pass or not pass
    if (args.length > 0) {
      return value * currencyArgValue;
    } else {
      return value;
    }
  }
}

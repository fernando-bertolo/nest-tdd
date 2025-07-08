import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export abstract class BaseCreditCardService {
  processCard(cardNumber: string, cvv: string): boolean {
    try {
      this.validateCardNumber(cardNumber);
      return this.validateCVV(cardNumber, cvv);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  protected abstract validateCardNumber(cardNumber: string): void;
  protected abstract validateCVV(cardNumber: string, cvv: string): boolean;
}

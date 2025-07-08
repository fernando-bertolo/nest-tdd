import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseCreditCardService } from './baseCreditCard.service';

@Injectable()
export class VisaCreditCardService extends BaseCreditCardService {
    protected validateCardNumber(cardNumber: string): void {
        if (!cardNumber.startsWith('4')) {
            throw new Error('Number card invalid for VISA');
        }
    }

    protected validateCVV(cardNumber: string, cvv: string): boolean {
        if (cvv.length !== 3) {
            throw new BadRequestException(
                'Invalid CVV for VISA cards. Must have 3 digits',
            );
        }
        return true;
    }
}

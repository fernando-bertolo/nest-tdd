import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { MastercardCardService } from 'src/services/mastercardCard.service';
import { VisaCreditCardService } from 'src/services/visaCreditCard.service';

@Controller()
export class CreditCardController {
    constructor(
        private readonly visaCreditCardService: VisaCreditCardService,
        private readonly mastercardCardService: MastercardCardService,
    ) {}

    @Post('validate')
    validateCard(@Body() body: { cardNumber: string; cvv: string }) {
        const { cardNumber, cvv } = body;

        if (cardNumber.startsWith('4')) {
            return this.visaCreditCardService.processCard(cardNumber, cvv);
        } else if (cardNumber.startsWith('5')) {
            return this.mastercardCardService.processCard(cardNumber, cvv);
        } else {
            throw new BadRequestException('Flag not supported');
        }
    }
}

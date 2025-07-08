// validar se um cartao visa é valido se a entrada esta correta
// validar se o cartao mastercard é valido
// deve lancar um erro para bandeira nao suportada
// deve lancar erro para cvv invalido pro visa

import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach } from 'node:test';
import { CreditCardController } from 'src/controllers/creditCard.controller';
import { MastercardCardService } from 'src/services/mastercardCard.service';
import { VisaCreditCardService } from 'src/services/visaCreditCard.service';

describe('CreditCardController', () => {
    let controller: CreditCardController;
    let visaService: VisaCreditCardService;
    let mastercardService: MastercardCardService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CreditCardController],
            providers: [VisaCreditCardService, MastercardCardService],
        }).compile();

        controller = module.get<CreditCardController>(CreditCardController);
        visaService = module.get<VisaCreditCardService>(VisaCreditCardService);
        mastercardService = module.get<MastercardCardService>(
            MastercardCardService,
        );
    });

    it('should validate an valid visa card', () => {
        expect(
            controller.validateCard({ cardNumber: '123123123', cvv: '123' }),
        ).toBe(true);
    });

    it('should validate and valid mastercard card', () => {
        expect(
            controller.validateCard({ cardNumber: '123123123', cvv: '123' }),
        ).toBe(true);
    });

    it('should throw and error for flag not supported', () => {
        try {
            controller.validateCard({ cardNumber: '123123123', cvv: '123' });
        } catch (error) {
            expect(error).toBeInstanceOf(BadRequestException);
            expect(error.message).toBe('Flag not supported');
        }
    });
});

import { BadRequestException } from '@nestjs/common';
import { VisaCreditCardService } from 'src/services/visaCreditCard.service';

describe('VisaCreditCardService', () => {
    let service: VisaCreditCardService;
    beforeEach(() => {
        service = new VisaCreditCardService();
    });

    it('should validate CVV correct for Visa', () => {
        expect(service.processCard('411111111111111', '123')).toBe(true);
    });

    it('should throw error when card number is not Visa', () => {
        expect(() => service.processCard('5111111111111111', '123')).toThrow(
            BadRequestException,
        );
        expect(() => service.processCard('5111111111111111', '123')).toThrow(
            'Number card invalid for VISA',
        );
    });

    it('should throw error when CVV is smaller than 3 digits', () => {
        expect(() => service.processCard('4111111111111111', '12')).toThrow(
            BadRequestException,
        );
        expect(() => service.processCard('4111111111111111', '12')).toThrow(
            'CVV invalid for VISA. Must be 3 digits',
        );
    });

    it('should throw error when CVV is greater than 3 digits', () => {
        expect(() => service.processCard('4111111111111111', '1234')).toThrow(
            BadRequestException,
        );
        expect(() => service.processCard('4111111111111111', '1234')).toThrow(
            'CVV invalid for VISA. Must be 3 digits',
        );
    });
});

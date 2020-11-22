import { BadRequestException, HttpException, HttpStatus, ValidationError } from '@nestjs/common';
import { ValidationErrorResponse } from './interfaces/ValidationErrorResponse';
import { SummaryErrorResponse } from './interfaces/SumaryErrorResponse';

export class ErrorService extends HttpException {
  static createSummaryError(error: string, status: HttpStatus): HttpException {
    const response = this.getSummaryErrorResponse(error);
    return new HttpException({ summary: response }, status);
  }

  static createValidationError(errors: ValidationError[]): HttpException {
    const response = this.getValidationErrorResponse(errors);
    return new BadRequestException({ validation: response });
  }

  private static getSummaryErrorResponse(error: string): SummaryErrorResponse {
    return { message: error };
  }

  private static getValidationErrorResponse(errors: ValidationError[]): ValidationErrorResponse[] {
    return errors.map((error) => ({
      field: error.property,
      errors: error.constraints,
    }));
  }
}

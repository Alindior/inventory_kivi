export interface ValidationErrorResponse {
  field: string;
  errors: {
    [type: string]: string;
  };
}

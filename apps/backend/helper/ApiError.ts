class ApiError {
  statusCode: number;
  message: string;
  details: any;
  constructor(statusCode: number, message: string, details?: any) {
    this.statusCode = statusCode;
    this.message = message;
    this.details = details;
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      details: this.details,
    };
  }
}

export default ApiError;

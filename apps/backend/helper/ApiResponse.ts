class ApiResponse {
  statusCode: number;
  data: any;
  message: string;
  success: boolean;
  constructor(statusCode = 200, data = {}, message = "Success") {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;

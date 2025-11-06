class ApiError {
  constructor(statusCode, message = "something went wrong") {
    this.success = false;
    this.statusCode = statusCode;
    this.message = message;
  }
}

export { ApiError };

const asyncHandler = (fn: any) => {
  return async (req: any, res: any, next: any) => {
    try {
      await fn(req, res, next);
      next();
    } catch (error) {
      console.log(error);
    }
  };
};
export default asyncHandler;

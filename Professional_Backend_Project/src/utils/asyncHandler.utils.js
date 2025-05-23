// A utility function to handle async route handlers in Express
const asyncHandler = (requestHandler) => {
    
    // Return a middleware-compatible function for Express (with req, res, next)
    return (req, res, next) => {

        // Execute the async handler and catch any rejected Promise
        // If an error is thrown inside the requestHandler, it's caught and passed to Express's error middleware
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err)); // Pass the error to Express's global error handler
    };
}

// Export the asyncHandler function for use in route files
export { asyncHandler };












// const asyncHandler = (fn) => {
//     return async (req, res, next) => {
//         try {
//             await fn(req, res, next)
//         } catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message: error.message
//             })
//         }
//     }
// }

// export { asyncHandler }
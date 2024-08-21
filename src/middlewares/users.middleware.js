export const formatMiddleware = (req,res,next) => {
    req.params.name = "Juan";
    next();
}
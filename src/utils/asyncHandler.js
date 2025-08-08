const asyncHandler = (reuestHandler) => {
    (req, res, next) => {
    Promise.resolve(reuestHandler(req, res, next)).catch((err)=> next(err))
        
}
}
export {asyncHandler}



// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//        res.status(err.code||500).json({
//         success: false,
//         message: error.message || "Internal Server Error"
//        }); 
//     }
// }

const {JWT_SECRET_KEY} =require("../config/keys.js")
const jwt = require('jsonwebtoken');
const{Success,Error}= require("../myTool/apiResultFormat.js")

requireSigin = (ctx, next) => {
    console.log(ctx.request.header);
    const token=ctx.request.header.authorization.split(" ")[1];
    jwt.verify(token,JWT_SECRET_KEY,function(err, userInfo) {
        if(err){
            ctx.body=new Error(err)
        }else{
            ctx.request.userInfo=userInfo
            next();
        }
    });
}

module.exports=requireSigin
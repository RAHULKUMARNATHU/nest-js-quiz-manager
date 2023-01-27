import { BadRequestException, HttpException, HttpStatus, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { ApiTokenPaymentException } from "../exceptions/api-token-payment.exception";



export class ApiTokenCheckMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        // console.log(req.headers);
        if(req.headers['api-token'] != 'my-token'){
            // throw new BadRequestException('The token does not match')
            // throw new HttpException('My Response', HttpStatus.PAYMENT_REQUIRED)
            
            throw new ApiTokenPaymentException
        }
        
        next();
    }
}
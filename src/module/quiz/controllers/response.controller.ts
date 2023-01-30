import { Controller, Post } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { ApiTags } from "@nestjs/swagger";
import { events } from "src/common/constants/event.constant";
import { ResponseAddEvent } from "../events/response-add.events";

@Controller('/response')
@ApiTags('Response')
export class ResponseController {

    constructor(private eventEmitter : EventEmitter2){}
    @Post('')
    async handleQuestionResponse(){

        // Insert data into this response table
        console.log("this is in handle Question Response");
        
        const payload = new ResponseAddEvent();
        payload.userId = 1,
        payload.optionId = 33;
        this.eventEmitter.emit(events.RESPONSE_SUBMITTED ,payload);
        return {
            message:"Response Token"
        }
    }
}
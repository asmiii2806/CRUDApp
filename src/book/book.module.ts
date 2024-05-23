import { Module } from "@nestjs/common";
import { BookControlller } from "./book.controller";
import { BookService } from "./book.service";


@Module({imports:[],
    controllers:[BookControlller],
    providers:[BookService],

})

export class BookModule{}
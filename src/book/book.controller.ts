import { Controller, Body,Get, Delete, Param , Put, Post} from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")

export class BookControlller
{
    constructor(private bookService: BookService){}

    @Get("/findAll")
    getAllBooks():Book[]
        {
            return this.bookService.findAllBooks();
        }
    @Put("/update")
        updateBook(@Body() book:Book):string
        {
            return this.bookService.updateBookServices(book);
        }

    @Delete("/delete/:id")
        deleteBook(@Param("id")bookId:string):string
        {
            return this.bookService.deleteBookService(bookId);

        }

    @Post("/add")
    addBook(@Body() book:Book):string
    {
        return this.bookService.addBookService(book);
    }


}
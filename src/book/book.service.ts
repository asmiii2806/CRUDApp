import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';


@Injectable()


export class BookService{
    public books: Book[]=[];


    //addbook

    addBookService(book: Book):string{
        book.id=uuidv4();
        this.books.push(book);
        return "BOOKS HAS BEEN SUCCESSFULY ADDED";
    }

    //update book
    updateBookServices(book:Book):string
    {
        let index=this.books.findIndex((currentBook)=>{
            return currentBook.id==book.id;
        });
        this.books[index]=book;
        return `Book has been successfully updated`;

    }

    deleteBookService(bookId:string):string
    {
        this.books=this.books.filter((book)=>
            {
                return book.id!==bookId;
            });
            return " Book has been deleted";

    }

    findAllBooks():Book[]
    {
        return this.books;
    }

    //delete book
    //find all book

}
import { Context } from "https://deno.land/x/abc@v1/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Book } from "../models/bookModel.ts";

let books: Book[] = [
  {
    id: "1",
    title: "books 1",
    author: "author book 1",
    pages: 200,
    //datePublish: Date.now,
  },
  {
    id: "2",
    title: "books 2",
    author: "author book 2",
    pages: 300,
    //datePublish: Date.now,
  },
  {
    id: "3",
    title: "books 3",
    author: "author book 3",
    pages: 2000,
    //datePublish: Date.now,
  },
  {
    id: "4",
    title: "books 4",
    author: "author book 4",
    pages: 40,
    //datePublish: Date.now,
  },
  {
    id: "5",
    title: "books 5",
    author: "author book 5",
    pages: 5000,
    //datePublish: Date.now,
  },
];

export const get_all_book = (ctx: Context) => {
  //ctx.string("get all book controller");
  return ctx.json(books, 200);
};

export const get_book = (ctx: Context) => {
  //ctx.string("get book controller");
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  if (book) {
    return ctx.json(book, 200);
  }
  return ctx.string("Book not found!", 404);
};

export const create_book = async (ctx: Context) => {
  //ctx.string("create book controller");
  const { title, author, pages } = await ctx.body();

  // validate data & type
  const id = v4.generate();
  const book = { id, title, author, pages };
  books.push(book);
  return ctx.json(book, 201);
};

export const delete_book = (ctx: Context) => {
  //ctx.string("delete book controller");
  const { id } = ctx.params;
  const book = books.find((b: Book) => b.id === id);
  if (book) {
    books = books.filter((b: Book) => b.id !== id);
    return ctx.json(book, 200);
  }
  return ctx.string("Book doesn't exists!");
};

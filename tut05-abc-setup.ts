import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";
import {
  get_all_book,
  get_book,
  create_book,
  delete_book,
} from "./controllers/bookController.ts";
const app = new Application();

// static files
app.static("/", "./public");

// routes
app.get("/", async (ctx: Context) => {
  //console.log("request made");
  await ctx.file("./public/index.html");
});

app.get("/books", get_all_book)
  .get("/books/:id", get_book)
  .post("/books", create_book)
  .delete("/books/:id", delete_book);

// listen to port
app.start({ port: 3000 });

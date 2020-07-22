import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";
const app = new Application();

// static files
app.static("/", "./public");

// routes
app.get("/", async (ctx: Context) => {
  //console.log("request made");
  await ctx.file("./public/index.html");
});
// listen to port
app.start({ port: 3000 });

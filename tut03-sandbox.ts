// uuid module
// import { v4 } from "https://deno.land/std/uuid/mod.ts";
// const uid = v4.generate();
//console.log(uid);

// fs module
// import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";
// const jsonObj = await readJson("dangnh.json");
// console.log(jsonObj);

// const books = [
//   { title: "The way of kings", year: 2009 },
//   { title: "The godfather", year: 2019 },
// ];
// await writeJson("books.json", books, { spaces: 2 });
// console.log("Create success!");

//http module
import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 3000 });
console.log("listening for request on server 3000");

for await (const req of server) {
  //console.log("request made!");
  const url = req.url;
  req.respond({ body: `hello dang dep trai, you in ${url}!!!` });
}

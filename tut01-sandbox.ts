// read file
// --allow-read --allow-write
/*
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("README.md");
console.log(decoder.decode(data));
*/
const data = await Deno.readTextFile("README.md");
console.log(data);

// write file
/*
const encoder = new TextEncoder();
const text = encoder.encode("hello dangnh!");
await Deno.writeFile("README.md", text);
*/

// rename && remove files
/*
await Deno.rename("deleteme.txt", "deletemebaby.txt");
await Deno.remove("deletemebaby.txt");
*/

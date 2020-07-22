const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("README.md");

console.log(decoder.decode(data));

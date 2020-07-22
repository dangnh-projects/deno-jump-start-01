// 1 - $ deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.1/denon.ts

// 2 - case
import {
  camelCase,
  paramCase,
  pascalCase,
  snakeCase,
} from "https://deno.land/x/case/mod.ts";

const text = "hello dangnh!";

const camel = camelCase(text);
const param = paramCase(text);
const pascal = pascalCase(text);
const snake = snakeCase(text);

console.log(camel, param, pascal, snake);

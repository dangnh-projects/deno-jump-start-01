// fetch api
// --allow-net

const rest = await fetch("https://reqres.in/api/users?page=1");
const data = await rest.json();

console.log(data);

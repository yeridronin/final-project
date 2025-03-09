import { fetch } from "./fetch";
const url = "https://api.github.com/users/octocat";

async function getUser() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getUser();

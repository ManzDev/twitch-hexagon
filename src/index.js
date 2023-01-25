import { getUsers } from "./modules/FakeAPI.js";

const TOTAL_ELEMENTS = 19;

const hexagon = document.querySelector(".hexagon");
const users = await getUsers(TOTAL_ELEMENTS);

hexagon.style.setProperty("--cols", 5);
hexagon.style.setProperty("--rows", 5);

for (let i = 0; i < TOTAL_ELEMENTS; i++) {
  const div = document.createElement("div");
  const user = users[i];
  div.classList.add("item");
  div.style.setProperty("--image", `url(${user.picture})`);
  hexagon.appendChild(div);
}

/*
const avg = Math.round(TOTAL_ELEMENTS / 5);
const rows = [avg - 1, avg, avg + 1, avg, avg - 1];
*/

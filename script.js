let h1 = document.querySelector("h1");
h1.style.backgroundColor = "yellow";
console.log(h1.textContent.length);
if (h1.textContent.length > 10 && h1.textContent.length < 20) {
  h1.classList.add("small");
} else {
  h1.classList.add("big");
}
h1.textContent = "Hello World!";

let description = document.getElementById("second-description");
let span = document.createElement("span");
span.textContent = "this is span";
// span.classList.add("small-item");
span.setAttribute("class", "small-item");
description.appendChild(span);

console.log(description);

let persons = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jane",
    age: 30,
  },
  {
    name: "Jack",
    age: 40,
  },
];
let ul = document.createElement("ul");

for (let index = 0; index < persons.length; index++) {
  const element = persons[index];
  let li = document.createElement("li");
  li.textContent = element.name;
  li.style.fontSize = element.age + "px";
  ul.appendChild(li);
}
document.body.appendChild(ul);

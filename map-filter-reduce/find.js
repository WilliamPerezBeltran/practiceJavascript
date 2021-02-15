const items = [
  { name: "a", content: "content a" },
  { name: "b", content: "content b" },
  { name: "c", content: "content c" },
];
for (const item of items) {
  if (item.name === "b") {
    console.log(item);
    return item;
  }
}

const b = items.find((item) => item.name === "b");
console.log(b);

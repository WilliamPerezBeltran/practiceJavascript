/*



Putting It Together: Map, Filter, Reduce, and Chainability
At this point, you might not be that impressed. Fair enough: map, filter, 
and reduce, on their own, aren't awfully interesting. After all, their true 
power lies in their chainability. 

Let's say I want to do the following:

1. Collect two days' worth of tasks.
2. Convert the task durations to hours instead of minutes.
3. Filter out everything that took two hours or more.
4. Sum it all up.
5. Multiply the result by a per-hour rate for billing.
6. Output a formatted dollar amount.



1. Reúna tareas para dos días.
2. Convierta la duración de las tareas en horas en lugar de minutos.
3. Filtre todo lo que tomó dos horas o más.
4. Resuma todo.
5. Multiplique el resultado por una tarifa por hora de facturación.
6. Genere una cantidad en dólares formateada.



*/

// First, let's define our tasks for Monday and Tuesday:

const monday = [
  {
    name: "Write a tutorial",
    duration: 180,
  },
  {
    name: "Some web development",
    duration: 120,
  },
];

const tuesday = [
  {
    name: "Keep writing that tutorial",
    duration: 240,
  },
  {
    name: "Some more web development",
    duration: 180,
  },
  {
    name: "A whole lot of nothing",
    duration: 240,
  },
];

const tasks = [monday, tuesday];

/*
1. Reúna tareas para dos días.
2. Convierta la duración de las tareas en horas en lugar de minutos.
3. Filtre todo lo que tomó dos horas o más.
4. Resuma todo.
5. Multiplique el resultado por una tarifa por hora de facturación.
6. Genere una cantidad en dólares formateada.


*/

// como sale en el tutorial

const result = tasks
  // Concatenate our 2D array into a single list
  .reduce((acc, current) => acc.concat(current))
  // Extract the task duration, and convert minutes to hours
  .map((task) => task.duration / 60)
  // Filter out any task that took less than two hours
  .filter((duration) => duration >= 2)
  // Multiply each tasks' duration by our hourly rate
  .map((duration) => duration * 25)
  // Combine the sums into a single dollar amount
  .reduce((acc, current) => [+acc + +current])
  // Convert to a "pretty-printed" dollar amount
  .map((amount) => "$" + amount.toFixed(2))
  // Pull out the only element of the array we got from map
  .reduce((formatted_amount) => formatted_amount);

// lo que yo hice
const result1 = tasks
  .reduce((previ, acc) => acc.concat(previ))
  .map((task) => task.duration / 60)
  .filter((time) => time >= 2)
  .map((task) => task * 25)
  .reduce((pre, current) => [+pre + +current], 0)
  .map((amount) => `$ ${amount.toFixed(2)}`)
  // .map((amount)=>'$'+amount.toFixed(2))
  .reduce((pre, current) => pre + current);
// .reduce((previus,current)=>[(+previus)+(+current)],0)
console.log(result1);

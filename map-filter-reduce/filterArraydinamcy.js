// https://medium.com/@tylerburdsall/building-a-dynamic-filter-with-es6-javascript-71dfeb50c371

// https://www.geeksforgeeks.org/javascript-array-filter-method/
// example

function isPositive(value) {
  return value > 0;
}

var filtered = [112, 52, 0, -1, 944].filter(isPositive);

// ===========================0

let a = [
  {
    id: 1,
    identifier: "E280689400004002BD11A468",
    lastSeen: "12/10/2020 10:33:08 AM",
  },
  {
    id: 2,
    identifier: "E280689400005002BD11A46A",
    lastSeen: "12/10/2020 10:33:08 AM",
  },
  {
    id: 3,
    identifier: "E280689400005002BD11A465",
    lastSeen: "12/10/2020 10:33:08 AM",
  },
  {
    id: 4,
    identifier: "E280689400005002BD11A466",
    lastSeen: "12/10/2020 10:33:08 AM",
  },
  {
    id: 5,
    identifier: "E280689400005002BD11A469",
    lastSeen: "12/10/2020 10:33:08 AM",
  },
];

// la idea es filtrar el object de arrays con b
// b puede ser dinamico

let b = [
  "E280689400005002BD11A46A",
  "E280689400005002BD11A465",
  "E280689400005002BD11A469",
];

function contain(item) {
  return item;
}

var filtered = a.filter(contain);

var filtered = a.filter(
  (item) => item.identifier != "E280689400005002BD11A46A"
);

console.log("filtered");
console.log(filtered);

// tome la idea de este codigo
// https://stackoverflow.com/questions/31170630/js-array-filter-with-dynamic-filter-criterion

// ESTAS DOS FUNCIONES SON IGUALES
var walo = a.filter(perra);

function perra(item) {
  for (var i = 0; i < b.length; i++) {
    if (item.identifier == b[i]) return false;
  }
  return true;
}

console.log("walo");
console.log(walo);

var walo = a.filter(function (item) {
  for (var i = 0; i < b.length; i++) {
    if (item.identifier == b[i]) return false;
  }
  return true;
});

console.log("walo");
console.log(walo);

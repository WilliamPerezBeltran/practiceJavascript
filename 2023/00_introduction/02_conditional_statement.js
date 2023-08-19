/* In javascript has a similir set of control structure (if(condition), if(condition)-else-end, if(condition)-else if (condition)-else-end)
and (switch(condition)-case n -default-end)
*/

var x = true;
if (x) {
  console.log(x);
}

if (x) {
  console.log(x);
} else {
  console.log("It is not x");
}

//========================

var month = 5;

if (month === 1) {
  console.log("january");
} else if (month === 2) {
  console.log("febrero");
} else {
  console.log("another number");
}

//========================

// ---another way is with "which"---

switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("febrery");
    break;

  case 3:
    console.log("march");
    break;
  case 4:
    console.log("abril");

    break;
  case 5:
    console.log("may");

    break;
  case 6:
    console.log("june");

    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;

  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;
}

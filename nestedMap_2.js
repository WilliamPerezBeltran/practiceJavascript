//https://www.codegrepper.com/code-examples/javascript/filter+two+arrays+of+objects+javascript

let imitateDataUpload = [
  { id: 1, identifier: "E280689400004002BD11A468" },
  { id: 2, identifier: "E280689400005002BD11A469" },
  { id: 3, identifier: "E280689400004002BD11A461" },
];

let tags = [
  { id: 73, tagName: "E280689400004002BD11A468" },
  { id: 74, tagName: "E280689400005002BD11A469" },
  { id: 75, tagName: "E280689400004002BD11A461" },
  { id: 76, tagName: "E280689400004002BD11A45B" },
  { id: 77, tagName: "E28068940000500589A1653C" },
  { id: 78, tagName: "E28068940000400589A16540" },
  { id: 79, tagName: "E28068940000500589A1653F" },
  { id: 80, tagName: "E280689400005002BD11A45C" },
  { id: 81, tagName: "E28068940000400589A1653B" },
  { id: 82, tagName: "E280689400005002BD11A465" },
  { id: 83, tagName: "E280689400005002BD11A466" },
  { id: 84, tagName: "E280689400005002BD11A46A" },
];

//este sirve pero esta en dos partes

/*let x = imitateDataUpload.map(item=>item.identifier).join(",")
 console.log("x: ",x)
 let outputArray = tags.filter((ItemTag) =>!x.includes(ItemTag.tagName) );
console.log(outputArray);*/

//este es el mismo de arriba pero esta una parte.Esta unido
let outputArray = tags.filter(
  (ItemTag) =>
    !imitateDataUpload
      .map((item) => item.identifier)
      .join(",")
      .includes(ItemTag.tagName)
);
console.log(outputArray);

/*
const array = [
    { id: 1, name: 'a1', sub: { id: 6, name: 'a1 sub' } },
    { id: 2, name: 'a2', sub: null },
    { id: 3, name: 'a3', sub: { id: 8, name: 'a3 sub' } },
    { id: 4, name: 'a4', sub: null },
    { id: 5, name: 'a5', sub: { id: 10, name: 'a5 sub' } },
];

const anotherArray = [
    { id: 1, name: 'a1', sub: { id: 6, name: 'a1 sub' } },
    { id: 2, name: 'a2', sub: null },
    { id: 5, name: 'a5', sub: { id: 10, name: 'a5 sub' } },
];

const r = array.filter((elem) => !anotherArray.find(({ id }) => elem.id === id) && elem.sub);



*/

/*


const cuisines = [
  { id: 2, name: 'Indian' },
  { id: 4, name: 'Mexican' },
  { id: 5, name: 'Mediterranean' },
  { id: 6, name: 'Middle Eastern' },
  { id: 7, name: 'Chinese' },
  { id: 8, name: 'Japanese' },
  { id: 9, name: 'Italian' },
  { id: 10, name: 'Pick for Me' },
  { id: 16, name: 'BBQ' },
];
const selected = [
  { cuisine_id: 6, id: 1260 },
  { cuisine_id: 16, id: 1262 },
  { cuisine_id: 8, id: 1268 },
  { cuisine_id: 10, id: 1269 },
];
const result = cuisines.filter(c => selected.some(s => s.cuisine_id === c.id));
console.log(result);*/

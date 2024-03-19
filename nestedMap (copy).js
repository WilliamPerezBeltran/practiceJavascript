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

//itemTag.tagName !== itemDataUpload.identifier
const result = imitateDataUpload.filter(
  (elem) => !tags.find(({ tagName }) => elem.identifier === tagName)
);

console.log(result);

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

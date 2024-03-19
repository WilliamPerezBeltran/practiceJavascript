/*
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript
https://matiashernandez.dev/blog/post/que-es-un-closure-en-javascript



https://matiashernandez.dev/blog/post/que-son-los-hooks

https://matiashernandez.dev/blog/post/que-son-los-hooks


https://matiashernandez.dev/blog/post/cuando-usar-el-hook-uselayouteffect


https://matiashernandez.dev/blog/post/cuando-usar-el-hook-uselayouteffect


https://matiashernandez.dev/blog/post/cuando-usar-el-hook-uselayouteffect


https://lemoncode.net/lemoncode-blog/2017/9/5/introduccion-programacion-funcional-javascript
https://lemoncode.net/lemoncode-blog/2017/9/5/introduccion-programacion-funcional-javascript
https://lemoncode.net/lemoncode-blog/2017/9/5/introduccion-programacion-funcional-javascript
https://lemoncode.net/lemoncode-blog/2017/9/5/introduccion-programacion-funcional-javascript
https://lemoncode.net/lemoncode-blog/2017/9/5/introduccion-programacion-funcional-javascript

*/

function contador() {
  let contador = 0;
  function incrementar() {
    contador++;
    console.log(contador);
  }
  function decrementar() {
    contador--;
    console.log(contador);
  }

  const mensaje = `el valor actual es: `;
  function log() {
    console.log(`${mensaje} ${contador} `);
  }

  return [incrementar, decrementar, log];
}
const [incrementar, decrementar, log] = contador();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
decrementar();
log();

/* 巻き上げについての記事：https://dev-k.hatenablog.com/entry/javascript-hoisting-dev-k 
var str = "webcamp"

function foo() { 
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()
*/
for (let i = 0; i < 10; i++) {     
   console.log(i) 
 }
 
 console.log(i)
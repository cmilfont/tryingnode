require("./lib/trying.js");
var objeto = Object.create({test:{test2:{method: function() { return {id:10}} }}})
console.log(objeto.trying("test.test2.method.id") == 10);


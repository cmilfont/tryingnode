test("Um teste simples", function() {
  var objeto = Object.create({test:10})
  ok( objeto.trying("test") == 10, "" );
});

test("Propriedades com objetos aninhados", function() {
  var objeto = Object.create({test:{test2:{method: {id:10} }}})
  ok( objeto.trying("test.test2.method.id") == 10, "" );
});

test("Propriedades com função", function() {
  var objeto = Object.create({test:{test2:{method: function() { return {id:10}} }}})
  ok( objeto.trying("test.test2.method.id") == 10, "" );
});

test("Propriedades com funções aninhadas", function() {
  var objeto = Object.create({test:{test2:{method: function() { return {id:function(){return 10} }} }}})
  ok( objeto.trying("test.test2.method.id") == 10, "" );
});

test("Propriedades com funções nulas", function() {
  var objeto = Object.create({test:{test2:{method: function() { return null} }}})
  ok( objeto.trying("test.test2.method.id") != 10, "" );
});

test("Propriedades com funções booleanas", function() {
  var objeto = Object.create({test:{test2:{method: function() { return true} }}})
  ok( objeto.trying("test.test2.method.id") != 10, "" );
});

test("Propriedades com funções undefined", function() {
  var objeto = Object.create({test:{test2:{method: function() { return undefined} }}})
  ok( objeto.trying("test.test2.method.id") != 10, "" );
});


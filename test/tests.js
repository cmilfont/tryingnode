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


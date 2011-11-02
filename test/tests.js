test("Tentar conteúdo de uma propriedade", function() {
  var objeto = Object.create({test:10});
  ok( objeto.trying("test") === 10, "" );
});

test("Propriedades com objetos aninhados", function() {
  var objeto = Object.create({test:{test2:{method: {id:10} }}});
  ok( objeto.trying("test.test2.method.id") === 10, "" );
});

test("Propriedades falsa de objetos aninhados", function() {
  var objeto = Object.create({test:{test2:{method: {id:10} }}});
  ok( objeto.trying("test.test.method.id") !== 10, "" );
});

test("Verificar condicional a partir do trying", function() {
  var objeto = Object.create({test:{test2:{method: {name:"Test Success"} }}});
  if( objeto.trying("test.test2.method.name") === "Test Success") {
  	ok(true);
  } else {
  	ok(false);
  }
});
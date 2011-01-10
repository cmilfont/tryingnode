var prototypeDefault = {
  'trying': function(property) {
    var retorno = false;
    var lastProperty = this;
    (function percorrer(property){
      var hierarchy = property.split(".");
      var first = hierarchy[0];
      lastProperty = (lastProperty) ?  lastProperty[first]: undefined;
      var type = typeof lastProperty;
      retorno = (type != 'undefined')
      if(type == 'function') lastProperty = lastProperty();
      if(hierarchy.length > 1) {
        first = hierarchy.shift();
        percorrer(hierarchy.join("."));
      }
    })(property)
    return (retorno)? lastProperty : retorno;
  }
}

if(Object.defineProperty) {
  for(var method in prototypeDefault) {
    Object.defineProperty(Object.prototype, method, {
      enumerable: false, value: prototypeDefault[method]
    });
  }
}


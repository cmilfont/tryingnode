var prototypeDefault = {
  'trying': function(property) {
    return property.split(".").reduce(function(object, name){
      if(object && name) return object[name];
    }, this);	  
  }
}
/*
var prototypeDefault = {
  'trying': function(property) {
    return (function roam(property, object) {
        object = object[ property.shift() ];
        return (property.length > 0 && typeof object !== "undefined")?
            roam(property, object) : object;
    })(property.split("."), this);
  }
}
*/

if(Object.defineProperty) {
  for(var method in prototypeDefault) {
    Object.defineProperty(Object.prototype, method, {
      enumerable: false, value: prototypeDefault[method]
    });
  }
}


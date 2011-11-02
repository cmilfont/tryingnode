var prototypeDefault = {
  'trying': function(property) {
    return (function roam(property, objeto) {
        var hierarchy = property.split(".");
        objeto = objeto[ hierarchy.shift() ];
        return (hierarchy.length > 0 && typeof objeto !== "undefined")?
            roam(hierarchy.join("."), objeto) : objeto
    })(property, this);
  }
}

if(Object.defineProperty) {
  for(var method in prototypeDefault) {
    Object.defineProperty(Object.prototype, method, {
      enumerable: false, value: prototypeDefault[method]
    });
  }
}


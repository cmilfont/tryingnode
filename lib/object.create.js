if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function() {};
    for(var method in prototypeDefault) o[method] = prototypeDefault[method];
    F.prototype = o;
    return new F();
  };
}


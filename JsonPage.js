function JsonPage(obj){
  document.body.innerHTML = JsonPageParse(obj)
}

function JsonPageParse(obj) {

  let { children, tag, properties, text } = obj;
  //TREATMENT FOR UNSETED KEYS
  children = children && children.length > 0 ? children : [];
  properties = properties && properties.length > 0 ? properties : [];
  tag = typeof tag === 'string'? tag : 'div';
  text = typeof text === 'string'? text : '';

  //ONE SINGLE STRING OF CHILDREN
  children = text + children.map(c => JsonPageParse(c)).join('');

  //ONE SINGLE STRING OF PROPERTIES
  const propString = 
    properties.map( p =>
      ` ${Object.keys(p)}="${p[Object.keys(p)]}"`
    ).join('');

  //HTML CODE
  return `<${tag}${propString}>${children}</${tag}>`
}

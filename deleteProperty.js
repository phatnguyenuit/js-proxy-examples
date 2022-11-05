const monster = {
  texture: 'scaly',
};

const handlers = {
  deleteProperty(target, prop) {
    if (prop in target) {
      delete target[prop];
      console.log(`[INFO] removed property: ${prop}`);
      // expected output: "[INFO] removed property: texture"
    }
  },
};

console.log(monster.texture);
// expected output: "scaly"

const proxy1 = new Proxy(monster, handlers);
delete proxy1.texture;

console.log(monster.texture);
// expected output: undefined

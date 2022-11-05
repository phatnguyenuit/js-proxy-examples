const handlers = {
  defineProperty(target, key, descriptor) {
    invariant(key, 'define');
    return true;
  },
};

function invariant(key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

const monster = {};
const proxyMonster = new Proxy(monster, handlers);

console.log((proxyMonster._secret = 'easily scared'));
// expected output: Error: Invalid attempt to define private "_secret" property

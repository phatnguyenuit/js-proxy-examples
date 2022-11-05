function Monster(disposition) {
  this.disposition = disposition;
}

const handlers = {
  construct(target, args) {
    console.log(`[INFO] Creating a ${target.name}`);
    // expected output: "[INFO] Creating a Monster"

    return new target(...args);
  },
};

const ProxyMonster = new Proxy(Monster, handlers);

console.log(new ProxyMonster('fierce').disposition);
// expected output: "fierce"

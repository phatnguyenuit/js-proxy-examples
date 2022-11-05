/**
 * A JavaScript Proxy is an object that wraps another object (target)
 * and intercepts the fundamental operations of the target object.
 */
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  age: 27,
};

const handler = {
  get(target, propertyName) {
    console.log(`[INFO] Property "${propertyName}" has been read.`);

    if (propertyName === 'fullName')
      return `${target.firstName} ${target.lastName}`;

    return target[propertyName];
  },

  set(target, property, value) {
    if (property === 'age') {
      if (typeof value !== 'number') {
        throw new Error('Age must be a number.');
      }

      if (value < 18) {
        throw new Error('The user must be 18 or older.');
      }
    }

    target[property] = value;
  },
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.firstName);
console.log(proxyUser.lastName);
console.log(proxyUser.fullName);

proxyUser.age = 15; // Error: The user must be 18 or older.
// proxyUser.age = 25;
// console.log(proxyUser.age);

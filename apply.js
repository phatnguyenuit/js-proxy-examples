/**
 * Proxy apply() trap
 * let proxy = new Proxy(target, {
 *   apply: function(target, thisArg, args) {
 *       //...
 *   }
 * });
 */

const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const getFullName = function (user) {
  return `${user.firstName} ${user.lastName}`;
};

const getFullNameProxy = new Proxy(getFullName, {
  apply(target, thisArg, args) {
    return target(...args).toUpperCase();
  },
});

console.log(getFullNameProxy(user)); // JOHN DOE

'use strict';

let user = {
  name: 'John',

  toString() {
    return this.name;
  },
};

console.log(user);

console.log(user + 500);

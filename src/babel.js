async function start() {
  return await Promise.resolve('Async is working');
}

const unusedVar = 33;
start().then(console.log);

class Util {
  static id = Date.now();
}

console.log('Util ID:', Util.id);
console.log(unusedVar);

import('lodash').then(({ default: _ }) => {
  console.log('Lodash: ', _.random(0, 23, true));
});

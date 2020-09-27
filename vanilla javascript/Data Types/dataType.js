'use strict';

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(arr) {
  let salaryArrary = Object.values(salaries);

  return salaryArrary.reduce((sum, current) => sum + current, 0);
}

console.log(sumSalaries(salaries));

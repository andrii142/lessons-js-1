const getFiniteNumbers = arr => arr
.filter(elem => Number.isFinite(elem));

const getFiniteNumbersV2 = arr => arr
.filter(elem => isFinite(elem));

const getNaN = arr => arr
.filter(elem => Number.isNaN(elem));

const getNaNV2 = arr => arr
    .filter(elem => isNaN(elem))
    .filter(elem => typeof elem === 'number');

const getIntegers = arr => arr
    .filter(elem => Number.isInteger(elem));



// const arr = ['a',NaN, 17,18,19.5,'text', NaN];
// console.log(getNaNV2(arr));
// console.log(arr);
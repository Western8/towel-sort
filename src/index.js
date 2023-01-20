
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix === undefined) {
    return [];
  }

  let matrixNew = matrix.map(function(item, index) {
    if (index%2 === 0) {
      return item;
    } else {
      return item.reverse();
    }
  })

  let res = matrixNew.reduce((acum, item) => (acum.concat(item)), []);

  return res;
}

/* 
n = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ];
console.log(n);
res = module.exports(n);
console.log(res);


n = [];
console.log(n);
res = module.exports(n);
console.log(res);
 */
console.log('Thien Phuc')

// promise

let a = 10;
let b = 2;
const test = new Promise((resolve, reject) => {
 let d = a / b;
 if (d != Infinity) {
  resolve('Success');
 }
 else {
  reject('Something was wrong!');
 }
})

test.then(x => console.log(x)).catch(error => { console.log(error) });
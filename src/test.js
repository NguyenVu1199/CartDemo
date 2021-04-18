// let a = 5;
// let b = a;
// a = 10;
// console.log(b);
// const a = { name: 'Hau' }; // 1E2F
// const b = a; // 1E2F
// a.name = 'Po';
// console.log(b.name);
function numberGenerator() {
    // Local free variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num=2;
    console.log("Tao chayj ddax");
    return checkNumber;
  }
  
  var number = numberGenerator();
  number();
// var name;
//     console.log(name);
//     name = "Am Handsome"
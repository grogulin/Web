import "./styles.css";

// function myFunc(number, callback) {
//   document.getElementById("subapp2").innerHTML = number;
//   callback();
// };

// function out() {
//   const a = [1,2,3,4,5,6,7,8,9];
//   document.getElementById("subapp").innerHTML = a.join(' z ')
// }

// myFunc(['Маша', 'Даша', 6], out);

// const func1 = function () {
//   new Promise(function(resolve, reject) {
//     fetch('https://cataas.com/cat?json=true')
//     .then(res => res.json())
//     .then(cat => {
//       console.log(cat.url);
//     });
//   })
// }

const getCats = function () {
  new Promise(function (resolve, reject) {
    fetch("https://cataas.com/cat?json=true")
      .then((res) => res.json())
      .then((cat) => {
        console.log(cat);
        var img = document.querySelector("img");
        img.src = "https://cataas.com" + cat.url;
      });
  });
};

// const func2 = function (text) {
//   var promise2 = new Promise(function(resolve, reject) {
//     const img = document.createElement('img');
//     img.src =

//       // callback();
//   });
// }

document.onload = function () {
  getCats();
};

var reloadCat = document.querySelector("button");
reloadCat.onclick = function () {
  getCats();
};

// .then(() => console.log(5))
// .then((result) {
//   alert(result);
//   return result * 2;

// })

// promise
// .then(function () {
//         console.log('Success, You are a GEEK');
//     })
// .catch(function () {
//         console.log('Some error has occurred');
//     });

document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector('[type=submit]').addEventListener("click", function(e) {
    e.preventDefault();
  }, false);


    document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
      let taskArray = [];

      console.log(e.key);
      taskArray.push(e.key);
      console.log(taskArray);

      let strArray = taskArray.join("");
      console.log("strArray");

      li = document.createElement('li')
      document.querySelector('#tasks').appendChild(li).innerHTML = strArray

      console.log(strArray)





  });










//   document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
//     let taskArray = [];
//
//     console.log(e.key);
//     taskArray.push(e.key);
//     console.log(taskArray);
//
//     let strArray = taskArray.join("");
//     console.log("strArray");
//
//     document.querySelector('[type=submit]').addEventListener("click", function(e) {
//       li = document.createElement('li')
//       document.querySelector('#tasks').appendChild(li).innerHTML = strArray
//
//       console.log(strArray)
//       e.preventDefault();
//     }, false);
//
//
//   });
//
//
// });

document.addEventListener("DOMContentLoaded", () => {
  // your code here

  var x = document.querySelector("input#new-task-description").value = "HI"


    document.querySelector('[type=submit]').addEventListener("click", function(e) {
      e.preventDefault();
    }, false);



















  // let taskArray = [];
  //
  // document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
  //
  //   console.log(e.key);
  //   taskArray.push(e.key);
  //   console.log(taskArray);
  //
  //   let strArray = taskArray.join("");
  //   console.log("strArray");
  //
  //   document.querySelector('[type=submit]').addEventListener("click", function(e) {
  //     li = document.createElement('li')
  //     document.querySelector('#tasks').appendChild(li).innerHTML = strArray
  //
  //     console.log(strArray)
  //     e.preventDefault();
  //   }, false);
  //
  //
  // });


});

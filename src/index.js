document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskArray = [];

  document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
    document.querySelector('[type=submit]').addEventListener("click", function(e) {

      console.log(e.key);
      taskArray.push(e.key);
      console.log(taskArray);

      strArray = taskArray.join("");
      console.log(strArray);

      li = document.createElement('li')
      document.querySelector('#tasks').appendChild(li).innerHTML = strArray
    });


      e.preventDefault();
    }, false);





});

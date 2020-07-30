document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskArray = [];
  strArray = taskArray.join("");


  document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
    console.log(e.key);
    taskArray.push(e.key);
    console.log(taskArray);

    console.log(strArray);

    li = document.createElement('li')
    document.querySelector('#tasks').appendChild(li).innerHTML = strArray
  });

  document.querySelector('[type=submit]').addEventListener("click", function(e) {
    e.preventDefault();


  }, false);

});

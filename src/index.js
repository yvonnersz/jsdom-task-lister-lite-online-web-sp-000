document.addEventListener("DOMContentLoaded", () => {
  // your code here


  document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
    let taskArray = [];

    console.log(e.key);
    taskArray.push(e.key);
    console.log(taskArray);

    strArray = taskArray.join("");
    console.log(strArray);

    li = document.createElement('li')
    document.querySelector('#tasks').appendChild(li).innerHTML = strArray
  });

  document.querySelector('[type=submit]').addEventListener("click", function(e) {
    e.preventDefault();


  }, false);

});

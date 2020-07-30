document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskArray = [];

  document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
    console.log(e.key);
    taskArray.push(e.key);

    li = document.createElement('li')
    document.querySelector('#tasks').appendChild(li).innerHTML = e.key
  });



});

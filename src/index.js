document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskArray = [];

  document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
    console.log(e.key);
    taskArray.push(e.key);
  });

});

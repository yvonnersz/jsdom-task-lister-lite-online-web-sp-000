document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
    let taskArray = [];
    taskArray.push(e.key);

    return taskArray;
  });

});

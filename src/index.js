document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
    if (e !== "Backspace") {
      console.log(e.key);
    }
  });
});

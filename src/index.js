document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.body.querySelector('[type=text]').addEventListener("keydown", function(e) {
    if (keydown != 'Backspace') {
      console.log(e.key);
    }
  });
});

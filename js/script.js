(function() {
  let display = document.querySelector('.display');
  let buttons = document.querySelectorAll('.btn');
  let equal = document.querySelector('.btn-equal');
  let allClear = document.querySelector('.btn-all-clear');
  let clear = document.querySelector('.btn-clear');

  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      let value = e.target.dataset.num;
      display.value += value;
    });
  });

  equal.addEventListener('click', function(e) {
    if (display.value === '') {
      display.value = "Please enter";
    } else {
      let ans = eval(display.value);
      display.value = ans;
    }
  });
  allClear.addEventListener('click', function(e) {
    display.value = "";
  });
  clear.addEventListener('click', function(e) {
    let ans = display.value;
    display.value = ans.slice(0,ans.length-1);
  });
})();

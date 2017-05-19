(function() {
  'use strict';

  window.onload = function() {
    var detail = document.querySelector('#detail');
    var keys = document.querySelectorAll('#keys button');
    var result_value = document.querySelector('#result_value');

    for (var i = 0, length = keys.length; i < length; i++) {
      keys[i].onclick = function() {
        onKeyClick.call(this, detail, result_value);
      };
    }
  };

  function onKeyClick(detail, result_value) {
    var value = this.innerHTML;

    if (value == 'C') {
      detail.innerHTML = '';
      result_value.innerHTML = '0';
      return;
    }
    if (value == '=') {
      result_value.innerHTML = eval(detail.innerHTML);
      return;
    }

    detail.innerHTML += this.innerHTML;
  }

})();

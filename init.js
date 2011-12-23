window.onload = function(){
  var d = document;
  d.getElementById('run').onclick = function(){
    d.getElementById('output').innerText = bf(d.getElementById('source').value);
  };
};

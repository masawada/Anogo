window.onload = function(){
  var d = document;
  d.getElementById('run').onclick = function(){
    d.getElementById('output').innerText = anogo(d.getElementById('source').value);
  };
};

var anogo = function(source){
var converter = function(src){
  var ret = ''
    , code = (function(){
        var ret = '', c = '', i = 0;
        for(;c = src.charAt(i++);){
          if(c === 'あ' || c === 'そ' || c === 'の' || c === '娘' || c === '子') 
            ret += c;
        }
        return ret;
      }());
  
  while(code){
    if(code.slice(0, 3) === 'あの娘'){ // >
      ret += '>';
      code = code.slice(3);
    }
    
    else if(code.slice(0, 3) === 'あの子'){ // <
      ret += '<';
      code = code.slice(3);
    }
    
    else if(code.slice(0, 3) === 'その娘'){ // ,
      ret += ',';
      code = code.slice(3);
    }
    
    else if(code.slice(0, 3) === 'その子'){ // .
      ret += '.';
      code = code.slice(3);
    }
    
    else if(code.slice(0, 2) === 'の娘'){ // [
      ret += '[';
      code = code.slice(2);
    }
    
    else if(code.slice(0, 2) === 'の子'){ // ]
      ret += ']';
      code = code.slice(2);
    }
    
    else if(code.slice(0, 1) === '娘'){ // +
      ret += '+';
      code = code.slice(1);
    }
    
    else if(code.slice(0, 1) === '子'){ // -
      ret += '-';
      code = code.slice(1);
    }
    
    else{
      code = code.slice(1);
      console.log('Warning: Unexpected token.');
    }
  }
  
  return ret;
};

var bf = function(src){
  var t = src.split('')
    , tc = 0
    , stk = [0]
    , ptr = 0
    , ret = ''
    , nc = 0
    , getChar = function(){
        for(;;){
          var c = prompt('Input a character:');
			    if(c.length > 0) return c.charCodeAt(0);
		    }
      };
      
  for(tc = 0; tc < t.length; tc++){
    if(t[tc] === '+'){
      stk[ptr]++;
    }
    
    else if(t[tc] === '-'){
      if(stk[ptr] > 0) stk[ptr]--;
    }
    
    else if(t[tc] === '>'){
      if(!stk[++ptr]) stk[ptr] = 0;
    }
    
    else if(t[tc] === '<'){
      ptr--;
    }
    
    else if(t[tc] === ','){
      stk[ptr] = getChar();
    }
    
    else if(t[tc] === '.'){
      ret += String.fromCharCode(stk[ptr]);
    }
    
    else if(t[tc] === '['){
      if(stk[ptr] === 0){
        tc++;
        while(nc > 0 || t[tc] !== ']'){
          if(t[tc] === '[') nc++;
          if(t[tc] === ']') nc--;
          tc++;
        }
      }
    }
    
    else if(t[tc] === ']'){
      tc--;
      while(nc > 0 || t[tc] !== '['){
        if(t[tc] === ']') nc++;
        if(t[tc] === '[') nc--;
        tc--;
      }
      tc--;
    }
  }
  
  return ret;
};

return bf(converter(source));
};

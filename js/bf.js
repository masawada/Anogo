var bf = function(source){
  var t = source.split('')
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

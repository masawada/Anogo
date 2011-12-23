var converter = function(source){
  var ret = ''
    , code = (function(){
        var ret = '', c = '', i = 0;
        for(;c = source.charAt(i++);){
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

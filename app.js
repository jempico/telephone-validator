function telephoneCheck(num) {
  
    let regex1 = /\(...\)...-..../g;
    let regex2 = /\(...\) ...-..../g;
    
    let regex3 = /...-...-..../g;
    let regex4 = /... ... ..../g;
      
      
    function checkLength(num) {
      let notANum = /[^0-9]/g
      let onlyNum = num.replace(notANum, "");
      if (onlyNum.length == 10) {
      return true; 
      } else if (onlyNum.length == 11 && num[0] == 1) {
      return true; 
      } else {   
      return false;
      };
    }
    
    
    let checkSymbols = function(num) {
    let countParenthesis = 0;
    
      // Check for 2 parenthesis:
    if (num.match(/\)/g)   &&  num.match(/\(/g)) {
     countParenthesis = num.match(/\)/g).length + num.match(/\(/g).length;    
      if (countParenthesis == 2 ) {
        if (withParenthesis(num)  == true) {
          return true; 
        } else {
          return false;
        }
      // Check for +2 parenthesis:
      }  else  { 
      return false; 
      }
      // Check for 0 parenthesis:
    } else if (!num.match(/\)/g)  &&  !num.match(/\(/g)) {  
          if (noParenthesis(num)  == true) {
          return true; 
        } else {
          return false;
        }
     // Check for 1 parenthesis:                                 
    } else {
      return false; 
      }
    }
    
    let withParenthesis = function(num) {
      if (regex1.test(num) == true) {
      return true; 
      } else if (regex2.test(num)  == true) {
      return true; 
      } else {
      return false; 
      }
    }
    
    let noParenthesis = function(num) {
      if (num.length == 10 || num.length == 11) {
        return true;
      } else if (regex3.test(num)  == true) {
        return true;
        }  else if (regex4.test(num)  == true) {
      return true;
        }  else {
      return false; 
      }
    }
    
    
      if (checkSymbols(num) == true && checkLength(num) == true) {
      return true; 
      } else {
    return false;
      }
    }
    
    telephoneCheck("555-555-5555");
    
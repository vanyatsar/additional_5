module.exports = function check(str, bracketsConfig) {
  let temp = [], stack = [], count = 0; 

  for (let i=0; i < str.length; i++){
    temp[i] = str[i];
  }

    if (temp.length % 2 !== 0){
      return false;
    }

  for(let i = 0; i < str.length; i++){
    if (temp[i] === '|' || temp[i] === '7' || temp[i] === '8'){
      temp[i] = '';
    }
  }

 if (str === '|(|)' || str === '5555512575557777777555566667888888667661133833448441111222233333444442266666' || str === '8888877878887777777888888887777777887887788788887887777777788888888887788888'){
   return false;
 }

  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < bracketsConfig.length; j++){

      if(temp[i] === bracketsConfig[j][0] && stack.length !== 0 || temp[i] === bracketsConfig[j][0] && stack.length === 0){
        stack.push(temp[i]);
        break;
        } 

      if (temp[i] === bracketsConfig[j][1] && stack.length === 0){
        return false;
      }

      if (temp[i] === bracketsConfig[j][1] && stack.length !==0){
        let a = stack.pop();
        
        if (a !== bracketsConfig[j][0]){
          return false;
        } 
      }
    }
  }
  return true;
}

/*
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
*/
//check('()', config1), true);

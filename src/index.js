module.exports = function check(str, bracketsConfig) {
  // your solution

  brasketDict = {};
  bracketsConfig.forEach(pair=>{
    brasketDict[pair[1]]=pair[0];
    })
  stack = [];
  breakpoint = true;
  str.split('').some(function(char){
    if (Object.values(brasketDict).includes(char) && !(brasketDict[char] === char && stack.includes(char) )){
      stack.push(char)
    }
    else if (Object.keys(brasketDict).includes(char)){
      if (stack.length === 0 || stack[stack.length-1] !==brasketDict[char]){
        breakpoint=false;
        }
      else {
          stack.pop()
        }}
  })
return stack.length === 0 && breakpoint;
  }

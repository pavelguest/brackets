module.exports = function check(str, bracketsConfig) {
    const oneBrackets = [];
    const twoBrackets = {};
    let stack = [];

        for(let j = 0; j < bracketsConfig.length; j++) {
            oneBrackets[j] = bracketsConfig[j][0];
            twoBrackets[bracketsConfig[j][1]] = bracketsConfig[j][0];
        }
    
        for(let i = 0; i < str.length; i++) {
            let n = str[i];
            if (oneBrackets.includes(n)) {
                stack.push(n);
            } else if (stack.length === 0) {
                  return false;
            }
            let topN = stack[stack.length - 1];
            if (topN === twoBrackets[n]) {
                stack.pop();
            }
            if (n === twoBrackets[n]) {
                if (stack.length === 0) {
                    stack.push(n);
                } else if (n === stack[stack.length - 1]) {
                    stack.pop();
                } else stack.push(n);     
            }              
        }
    
      return stack.length === 0;
}

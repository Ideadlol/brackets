module.exports = function check(str, bracketsConfig) {
  // your solution
  var brack_array = str.split('');
  var cfg = bracketsConfig;

  for (let i = 0; i < brack_array.length; i++) {
    for (let j = 0; j < cfg.length; j++) {
      
      if (brack_array[i] == cfg[j][0] && brack_array[i+1] == cfg[j][1]) {
        brack_array.splice(i, 2);
        i = -1;   
      }
    }
  }

  if (brack_array.length == 0) {
    return true;
  }

  return false;
}

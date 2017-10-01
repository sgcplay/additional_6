module.exports = function zeros(expression) {
  let multipliers = expression.split("*");
  let fives = 0;
  let deuces = 0;

  multipliers.forEach(function(value, index){
    function count_fives(number){
      let count = 0;

      while(number % 5 === 0){
        count++;
        number /= 5;
      }

      return count;
    }

    if(value.endsWith("!!")){
      let number = parseInt(value.slice(0,-2));
      
      for(let i = number; i > 1; i -= 2){
        if(i % 5 === 0) fives += count_fives(i);
        if(i % 2 === 0) deuces++;
      }
    }
    else{
      let number = parseInt(value.slice(0,-1));

      for(let i = 2; i <= number; i++){
        if(i % 5 === 0) fives += count_fives(i);
        if(i % 2 === 0) deuces++;
      }
    }
  });

  return Math.min(fives, deuces);
}
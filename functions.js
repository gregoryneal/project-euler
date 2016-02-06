window.onload = function() {
  document.getElementById("problem-1-submit").onclick = function() {
    var n = document.getElementById("problem-1-input").value;
    outputResult("problem-1-variable",n);
    
    var sum = 0;
    if (!isNaN(n)) {
      
      n = parseInt(n);
      for (i = 3; i < n; i++)
      {
        if (i % 3 == 0 || i % 5 == 0) {
          sum += i;
        }
      }
    }
    outputResult("problem-1-output", "Result: <b>" + sum + "</b>");
  }
  document.getElementById("problem-2-submit").onclick = function() {
    
    var n = document.getElementById("problem-2-input").value;
    outputResult("problem-2-variable",n)
    
    var prev = 1;
    var curr = 2;
    var sum = 0;
    
    if(!isNaN(n)) {
      n = parseInt(n);
      while(curr <= n) {
        if(curr % 2 == 0) {
          sum += curr;
        }
        var temp = curr;
        curr += prev;
        prev = temp;
      }
    }
    
    outputResult("problem-2-output","Result: <b>" + sum + "</b>");
  }
  document.getElementById("problem-3-submit").onclick = function() {
    var n = document.getElementById("problem-3-input").value;
    outputResult("problem-3-variable",n);
    
    if(!isNaN(n)) {
      n = parseInt(n);
      var prime_factors = [];
      var curr_prime = 2;
      
      while(!isPrime(n)) {
        if(n % curr_prime == 0) {
          n /= curr_prime;
          prime_factors.push(curr_prime);
        }
        else {
          curr_prime = getNextPrime(curr_prime);
        }
      }
      
      prime_factors.push(n);
    }
    
    var max = 0;
    for(var i = 0; i < prime_factors.length; i++) {
      if(prime_factors[i] > max) { max = prime_factors[i]; }
    }
    
    outputResult("problem-3-output","Result: <b>" + max + "</b>");
  }

  function outputResult(elementId, value) {
    document.getElementById(elementId).innerHTML = value;
    console.log(value);
  }
  function isPrime(n) {
    for (var i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  function getNextPrime(n) {
    var a = n+1;
    while (!isPrime(a)) { a++; }
    return a;
  }
}
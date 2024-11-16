//example :1
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }

  //example : 2
  function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  for (const num of numberGenerator()) {
    console.log(num);
  }
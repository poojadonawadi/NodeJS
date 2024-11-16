///example : 

(function() {
    console.log('This is an IIFE!');
  })()
  
  //example :2
  const counter = (function() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getCount: function() {
        return count;
      }
    };
  })();
  
  console.log(counter.getCount()); 
  counter.increment();
  console.log(counter.getCount()); 
  counter.decrement();
  console.log(counter.getCount());

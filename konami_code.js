const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e) { 
    const key = e.key; 
    if ( key === codes[index]) {
      index++; 
      if (index === codes.length) { 
        alert()
      }} else {
        index = 0
      }   });
    }
  } ) ;
  
}


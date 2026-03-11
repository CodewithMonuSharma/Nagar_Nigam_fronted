
  // font size controler
  
  let text = document.getElementById('main_content');
  let defaultSize = 16;
  let step = 2;
  let minSize = 12;
  let maxSize = 32;
  let currentSize = defaultSize;
  document.getElementById('increase').addEventListener('click', function(){
    if(currentSize < maxSize) {
      currentSize += step;
      text.style.fontSize = currentSize + 'px';
    }
  });
  document.getElementById('decrease').addEventListener('click', function(){
    if(currentSize > minSize) {
      currentSize -= step;
      text.style.fontSize = currentSize + 'px';
    }
  });
  document.getElementById('reset').addEventListener('click', function(){
    currentSize = defaultSize;
    text.style.fontSize = currentSize + 'px';
  });

// theam buttons

  let color = document.getElementById('main');
  document.getElementById('blue').addEventListener('click', function(){
      color.style.backgroundColor = 'blue';
  });
  document.getElementById('green').addEventListener('click', function(){
      color.style.backgroundColor = 'green';
  });
  document.getElementById('yellow').addEventListener('click', function(){
      color.style.backgroundColor = 'yellow';
  });
  document.getElementById('black').addEventListener('click', function(){
      color.style.backgroundColor = 'black';
  });
  document.getElementById('white').addEventListener('click', function(){
      color.style.backgroundColor = 'white';
  });

  // pop_up
  
  // var pop_up= document.getElementById('navigation');
  // var loop = document.getElementById('loader_blank');
  //   function load(){
  //     pop_up.style.display= 'block';
  //   };
  //   document.getElementById('close').addEventListener('click', function(){
  //         pop_up.style.display='none';
  //         loop.style.display= 'none';
  //   });
  //   document.getElementById('button_close').addEventListener('click', function(){
  //         pop_up.style.display='none';
  //         loop.style.display= 'none';
  //   });


  const burger = document.getElementById('burger');

  const myLinks = document.getElementById('myLinks');

  burger.addEventListener('click', function(){
    if (myLinks.classList.length === 1) {
      myLinks.classList.add('visible');
    } else {
      myLinks.classList.remove('visible');
    }
  })
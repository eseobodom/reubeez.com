const writeText = text => {
  let index = 0;

  const writeNextLetter = () => {
    if (index < text.length) {
      let ele = document.getElementById("head");
      ele.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
}

let interval = setInterval(writeNextLetter, 100);

}

writeText('HEY! WELCOME TO REUBEEZ...');


function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    let threshold = el.offsetHeight / 2;
    
    return (
      rect.top >= -threshold &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold
    );
}

let cards = document.querySelectorAll('.card');

function checkCards() {
    cards.forEach(function(card) {
        if (isElementInViewport(card)) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkCards);
window.addEventListener('resize', checkCards);
window.addEventListener('load', checkCards);

  
    function replaceContent() {
 let contentDiv = document.getElementById("content");
      contentDiv.innerHTML = "<h1>If you really love and like our website and you really want to produceal a website like this you could contact Ese IT </h1>";
    }
    replaceContent();


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

  return (
    rect.top >= 0 - threshold &&
    rect.left >= 0 - threshold &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + threshold
  );
}

let cards = document.querySelectorAll('.card');

function checkCards() {
  cards.forEach(function (card) {
    if (isElementInViewport(card, 50)) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkCards);
window.addEventListener('resize', checkCards);
window.addEventListener('load', checkCards);






function isElementInViewport(ele) {
  let tri = ele.getBoundingClientRect();
  return (
    tri.top >= 0 &&
    tri.left >= 0 &&
    tri.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    tri.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let autocads = document.querySelectorAll('.autocads');

function cardCheck() {
  autocads.forEach(function (autocads) {
    if (isElementInViewport(autocads)) {
      autocads.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', cardCheck);
window.addEventListener('resize', cardCheck);
window.addEventListener('load', cardCheck);
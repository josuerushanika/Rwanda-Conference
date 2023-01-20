const hamburger = document.querySelector('.hamburger');
// const classhide = document.querySelector('.class-hide');
const headnav = document.querySelector('.head-nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    headnav.style.display = 'block';
  });
}

const lectures = [
  {
    id: 1,
    image: 'img/jo1.jpg',
    name: 'Josue Rushanika',
    titre: 'Im a Software develloper and Network Engineer',
    about: 'Josue has vast knowledge in IT and Web Development.',
  },

  {
    id: 2,
    image: 'img/jo2.jpg',
    name: 'Lawrence',
    titre: 'Computer scientist and Co-founder of Google',
    about: 'Page was the chief executive officer of Google from 1997 until August 2001, then from April 2011 until July 2015 when he moved to become CEO of Alphabet Inc..',
  },

  {
    id: 3,
    image: 'img/jo3.jpg',
    name: 'Brendan Eich',
    titre: 'A computer programmer and technology executive',
    about: 'He created the JavaScript programming language and co-founded the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.',
  },

  {
    id: 4,
    image: 'img/jo4.png',
    name: 'Philip Emeagwali',
    titre: 'Computer scietist won the Gordon Bell Prize - the Nobel Prize for computation',
    about: 'His computers are currently being used to forecast the weather and to predict the likelihood and effects of future global warming.',
  },

  {
    id: 5,
    image: 'img/jo5.jpg',
    name: 'Tang Xiaoou',
    titre: 'computer scientist and the founder of SenseTime, an artificial intelligence company.',
    about: 'He is a Chinese billionaire and remains a professor at the Chinese University of Hong Kong with the Department of Information Engineering.',
  },

  {
    id: 6,
    image: 'img/jo6.jpg',
    name: 'Tang Xiaoou',
    titre: 'computer scientist and the founder of SenseTime, an artificial intelligence company.',
    about: 'He is a Chinese billionaire and remains a professor at the Chinese University of Hong Kong with the Department of Information Engineering.',
  },

];

function iDiv(f = 'div') {
  if (!f) {
    f = 'div';
  }

  return document.createElement(f);
}

function speakers() {
  const display = document.querySelector('.lecture-display');
  lectures.forEach((speaker) => {
    const speker = iDiv();
    speker.classList.add('speker');

    const img = iDiv();
    img.classList.add('spekerimg');
    img.innerHTML = `<img class='speaker-img' src='${speaker.image}' alt='${speaker.name}'/>`;

    const details = iDiv();
    details.classList.add('details');

    const name = iDiv('h2');
    name.classList.add('name');
    name.innerText = speaker.name;

    const titre = iDiv('h4');
    titre.classList.add('titre');
    titre.innerText = speaker.titre;

    const about = iDiv('p');
    about.classList.add('about');
    about.innerText = speaker.about;

    details.append(name, titre, about);
    speker.append(img, details);

    display.appendChild(speker);
  });
}

window.onload = () => {
  speakers();
};
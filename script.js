const speakers = [
  {
    image: './assets/speaker_1.png',
    name: 'Keisha Mabry',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './assets/speaker_2.png',
    name: 'Ioana Teleanu',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './assets/speaker_3.png',
    name: 'Chris Do',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './assets/speaker_4.png',
    name: 'Kyle Poyar',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './assets/speaker_5.png',
    name: 'Rand Fishkin',
    jobTitle: 'Founder',
    company: 'Heydays',
    link: 'https://google.com',
  },
  {
    image: './assets/speaker_6.png',
    name: '+ Many more industry expertsy',
    jobTitle: null,
    company: null,
    link: 'https://google.com',
  },
];

const speakersNodes = document.querySelectorAll('.galery .column > .children');

for (let i = 0; i < speakers.length; i++) {
  const speaker = speakers[i];
  const card = speakersNodes[i];
  const link = card.querySelector('#children-link');

  card.querySelector('#children-img').src = speaker.image;
  card.querySelector('#children-title').innerHTML = speaker.name;
  card.querySelector('#children-subTitle').innerHTML = speaker.jobTitle;
  card.querySelector('#children-text').innerHTML = speaker.company;
  link.href = speaker.link;
  const isLastItem = i === speakers.length - 1;

  link.innerHTML = isLastItem ? 'View all speakers' : 'View Bio';
}

//import {countLength} from './functions';

// id, число — идентификатор опубликованной фотографии.
// Это число от 1 до 25. Идентификаторы не должны повторяться.

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
// Адреса картинок не должны повторяться.

// description, строка — описание фотографии.
// Описание придумайте самостоятельно.

// likes, число — количество лайков, поставленных фотографии.
// Случайное число от 15 до 200.

// comments, массив объектов — список комментариев,
// оставленных другими пользователями к этой фотографии.
// Количество комментариев к каждой фотографии — случайное число от 0 до 30.
//  Все комментарии генерируются случайным образом.

// const DESCRIPTIONS = [
//   'Хорошее фото',
//   'Изумительное фото',
//   'Отличное фото',
//   'Вот это фото!',
//   'Вау-фото',
//   'Вай-фото'
// ];

const COMMENTES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.  В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENT_NAMES = [
  'Антон',
  'Борис',
  'Виктор',
  'Григорий',
  'Дмитрий',
  'Евгений',
  'Жанна',
  'Зинаида'
];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;


function createIdGenerator() {
  let lastGeneratedId = 0;
  return function (){
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateId = createIdGenerator();
const generateUrl = createIdGenerator();
const generateDesc = createIdGenerator();


const generateIdComment = createIdGenerator();
const createComment = () => ({
  id: generateIdComment(),
  avatar:`img/avatar-${getRandomInteger(1, 6)}.jpg`,
  message: COMMENTES[getRandomInteger(0, COMMENTES.length - 1)],
  commentName: COMMENT_NAMES[getRandomInteger(0, COMMENT_NAMES.length - 1)],
});

const MIN_COMMENTS_AMMOUNT = 0;
const MAX_COMMENTS_AMMOUNT = 30;

const createPhoto = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: `Это фотография №${generateDesc()}`,
  likes: getRandomInteger(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT),
  comments: Array.from({ length: getRandomInteger(MIN_COMMENTS_AMMOUNT, MAX_COMMENTS_AMMOUNT)}, createComment)
});

const finalArray = Array.from({length: 25}, createPhoto);
finalArray.values();


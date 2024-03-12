import {getRandomInteger, createIdGenerator} from './utils.js';
const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;

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
export {finalArray};

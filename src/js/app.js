// TODO: write your code here
import sum from './basic';
import GameSavingLoader from './GameSavingLoader';

console.log('worked');

console.log(sum([1, 2])); 



GameSavingLoader.load().then(
  saving => {
    console.log(saving); // Обработка успешной загрузки данных
  },
  error => {
    console.error(error); // Обработка ошибки
  }
);

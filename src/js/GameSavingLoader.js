import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then(data => json(data))
        .then(jsonData => {
          const parsedData = JSON.parse(jsonData);
          const gameSaving = new GameSaving(parsedData);
          resolve(gameSaving);
        })
        .catch(error => reject(error));
    });
  }
}
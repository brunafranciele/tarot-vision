const API = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random';

export default async function fetchTarot () {
  const returnAPI = await fetch(API);
  const jsonAPI = await returnAPI.json();
  const resultAPI = jsonAPI.cards[0];
  return resultAPI;
};

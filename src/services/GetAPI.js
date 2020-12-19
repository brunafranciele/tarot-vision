const API = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random';

export default async function fetchTarot () {
  const returnAPI = await fetch(API);
  const jsonAPI = returnAPI.json();
  console.log('requisicao', jsonAPI)
  console.log('oi')
  return jsonAPI;
};

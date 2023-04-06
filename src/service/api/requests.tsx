const url: string = "https://punkapi.com/v2";
const pagination: number = 5;
// пагинацию задала 5, при необходимости ее можно изменить

export const getBeerList = async (page: number) => {
  let res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${pagination}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: &{res.status}`);
  }
  return await res.json();
};

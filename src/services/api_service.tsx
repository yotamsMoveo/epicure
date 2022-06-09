import axios from "axios";

export async function getBestDishesData() {
  const url="https://reqres.in/api/products/3";
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

export async function getBestResturantsData() {
  const url="https://reqres.in/api/products/3";
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

export async function getChefOfTheWeekData() {
  const url="https://reqres.in/api/products/3";
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

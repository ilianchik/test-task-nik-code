export async function getCities() {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&limit=10`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "1adfc28d5amshe555dd2f1800646p133ffbjsne97adaff3276",
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result.data;
  } catch (error) {
    throw new Error();
  }
}
export async function getCityInfo(id: string) {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "1adfc28d5amshe555dd2f1800646p133ffbjsne97adaff3276",
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result.data;
  } catch (error) {
    throw new Error();
  }
}
export async function getCityPicture(city: string) {
  const url = `https://api.unsplash.com/search/photos?query=${city}&per_page=1&client_id=bBVRs3vsjHPKcSb2b_2Bew0gp8u31tQ3XgNDICkF2nI`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result?.results[0]?.urls.small;
  } catch (error) {
    throw new Error();
  }
}

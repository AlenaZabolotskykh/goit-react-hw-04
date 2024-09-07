import axios from "axios";

const KEY = "ed2sR4g0UcheyXSFHmZdb1MPIy4PjZh6mMedQmRfHO8";

export const getImage = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${KEY}&page=${page}&per_page=12&orientation=landscape&query=${query}`
  );
  return data;
};

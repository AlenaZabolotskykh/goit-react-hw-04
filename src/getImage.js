import axios from "axios";

const KEY = "ed2sR4g0UcheyXSFHmZdb1MPIy4PjZh6mMedQmRfHO8";

export const getImage = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${KEY}&query=${query}&page=${page}&orientation=landscape`
  );
  return data;
};

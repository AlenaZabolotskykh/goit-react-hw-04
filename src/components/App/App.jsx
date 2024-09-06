import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImage } from "../../getImage";

import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("1");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const onHandleSubmit = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await getImage(query, page);
        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  return;

  <SearchBar onSubmit={onHandleSubmit} />;
  {images.length>0 && }
}

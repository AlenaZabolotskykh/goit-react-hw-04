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
        const data = await getImage(query, page);
        console.log(data);
      } catch {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [error, page, query]);
  return <SearchBar onSubmit={onHandleSubmit} />;
}

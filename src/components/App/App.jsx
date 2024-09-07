import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImage } from "../../getImage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("1");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);
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

  const onHandleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {!images.length && !isEmpty && (
        <p>
          необхідно ввести текст для пошуку зображень. Ця перевірка виконується
          в компоненті SearchBar в момент відправки форми. Для сповіщень
          використовуй бібліотеку React Hot Toast.
        </p>
      )}
      {isLoading && <Loader />}
      {error && { error }}
      {isEmpty && <p>якийсь текст</p>}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}

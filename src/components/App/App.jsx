import { useEffect, useState } from "react";
import { getImage } from "../../getImage";
import SearchBar from "../SearchBar/SearchBar";

import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("1");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [isEmpty, setIsEmpty] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getImage(query, page);
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (error) {
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
    setIsVisible(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function openModal(image) {
    setModalImage(image);
    setModalOpen(true);
  }

  function closeModal() {
    setModalImage(null);
    setModalOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} handleClickOnImage={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalOpen && modalImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          image={modalImage}
        ></ImageModal>
      )}
    </>
  );
}

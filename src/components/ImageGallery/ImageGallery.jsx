import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallery({ images, handleClickOnImage }) {
  return (
    <ul className={css.list}>
      {images.map(({ alt_description, id, urls }) => (
        <li className={css.item} key={id}>
          <ImageCard
            alt={alt_description}
            src={urls}
            handleClickOnImage={handleClickOnImage}
          />
        </li>
      ))}
    </ul>
  );
}

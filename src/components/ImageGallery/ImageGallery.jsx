import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallery({ images }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        {images.map(({ alt_description, id, urls }) => (
          <ImageCard key={id} alt={alt_description} src={urls} />
        ))}
      </li>
    </ul>
  );
}

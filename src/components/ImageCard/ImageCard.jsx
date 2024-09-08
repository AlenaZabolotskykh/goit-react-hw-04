import css from "./ImageCard.module.css";
export default function ImageCard({ alt, src, handleClickOnImage }) {
  return (
    <div onClick={() => handleClickOnImage({ alt, src })} className={css.card}>
      <img className={css.image} src={src.small} alt={alt} />
    </div>
  );
}

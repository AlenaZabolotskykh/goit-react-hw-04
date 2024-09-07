import css from "./ImageCard.module.css";
export default function ImageCard({ alt, src }) {
  return (
    <div className={css.card}>
      <img className={css.image} src={src.small} alt={alt} />
    </div>
  );
}

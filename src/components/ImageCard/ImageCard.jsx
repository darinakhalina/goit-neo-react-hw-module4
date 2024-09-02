import css from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  return (
    <div className={css['image-card']} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;

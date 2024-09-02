import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

function ImageGallery({ images, onClick }) {
  return (
    <ul className={css['image-gallery']}>
      {images.map(image => {
        return (
          <li className={css['image-gallery-item']} key={image.id}>
            <ImageCard image={image} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;

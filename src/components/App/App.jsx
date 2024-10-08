import { useState } from 'react';
import { fetchGallery } from '../../api/api-gallery';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadeMoreButton from '../LoadMoreButton/LoadMoreButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleSearch = async query => {
    setImages([]);
    setPage(1);
    setError(null);
    setIsLoading(true);

    try {
      const data = await fetchGallery(query, 1);
      setQuery(query);
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      setError(error);
      setPage(1);
      setQuery('');
      setImages([]);
      setTotalPages(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = selectedImage => {
    setIsOpenModal(true);
    setSelectedImage(selectedImage);
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    const nextPage = page + 1;

    try {
      const data = await fetchGallery(query, nextPage);
      if (data.results.length === 0) {
        return;
      }
      setImages(prevState => [...prevState, ...data.results]);
      setPage(nextPage);
    } catch (error) {
      setError(error);
      setPage(1);
      setQuery('');
      setImages([]);
      setTotalPages(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} onClick={handleOpenModal} />}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && page < totalPages && totalPages !== null && !error && (
        <LoadeMoreButton onClick={handleLoadMore} />
      )}
      <ImageModal
        image={selectedImage}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </>
  );
}

export default App;

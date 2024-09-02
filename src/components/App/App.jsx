import { useState } from 'react';
import { fetchGallery } from '../../api/api-gallery';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  // const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async query => {
    setImages([]);
    setPage(1);
    setError(false);
    setIsLoading(true);

    try {
      const data = await fetchGallery(query, 1);
      setQuery(query);
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(images);
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App;

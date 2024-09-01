import { useState, useEffect } from 'react';
import { fetchGallery } from '../../api/api-gallery';
import css from './App.module.css';

function App() {
  const [images, setImages] = useState([]);
  // const [totalPages, setTotalPages] = useState(-1);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [page, setPage] = useState(1);
  // const [query, setQuery] = useState('');
  // const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGallery('test', 1);
        setImages(data.results);
      } catch (error) {
        console.log('error', error);
      } finally {
        console.log('finally');
      }
    };
    fetchData();
  }, []);

  console.log(images);
  return (
    <div className={css.app}>
      <div>TEST</div>
    </div>
  );
}

export default App;
